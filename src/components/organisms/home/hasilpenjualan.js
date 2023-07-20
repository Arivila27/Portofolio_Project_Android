import React , {useState,useEffect}from 'react'; 
import {View,ToastAndroid, TouchableOpacity} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import Tanggalsekarang from '../../molecules/home/tanggalsekarang';
import Nominalpenjualan from '../../molecules/home/nominalpenjualan';
import Namatoko from '../../molecules/home/namatoko';
import axios from 'axios';
import { myApi } from '../../../config/service/api';
import moment from 'moment';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { myColor } from '../../../assets/color';
import Font12mediumhitam from '../../atoms/font12medium';
import Ket1 from '../../atoms/ket1';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { connect, useDispatch } from 'react-redux';
import { addStatus } from '../../../redux/shopping/shoppingaction';

const Hasilpenjualan = ({ statusku,...props}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [dept, setDept] = useState('')

    const [tglku,setTglku ] = useState(moment(new Date()).format("DD-MM-YYYY"))

    // const tglkusaldo = moment(new Date()).format("DD-MM-YYYY")
    const [date, setDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
        console.log("MANGGIL")
      };
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleConfirm = (date) => {
        setDate(date);
        console.log("Datenya ", date)
         const form = moment(date).format("DD-MM-YYYY")
        console.log("JOKSS ", form)
        setTglku(form)
        dispatch(addStatus(!statusku))
        hideDatePicker();
        
      };
      useEffect(() => {
        const getData = async () => {
            const idnya2 = await AsyncStorage.getItem('DATALOGIN')
            const idnya = JSON.stringify(idnya2)
            let jsonObject = JSON.parse(idnya)
            
            var myObj = JSON.parse(jsonObject)
            //console.log("data user" ,myObj)
            setDept(myObj.userDept)
            
        //   dispatch(updateDataMakanan(datamakanan))
        }
  
    setTimeout(() => {
      getData()
      
    }, )
  }, [dept])
    return (
        <View style={css.containerbiru}>
        {/* Judul Kafe & Side bar */}
        <Namatoko/>
        {/* Page Saldo */}
        {dept==='6352cefb619aec8beec5bec1' ? 
         <>
         <View style={css.containersaldo}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 {/* <Tanggalsekarang/> */}
                 <TouchableOpacity onPress={()=>{
                     console.log("DI PENCET")
                     showDatePicker();
                 } }>
                     <View style={{flexDirection:'row', justifyContent:'center'}}>
                         <View style={{marginRight:5,justifyContent:'center'}}>
                             <FontAwesomeIcon icon={faCheckCircle} color={myColor.hijau} size={10} />
                         </View>
                         <Ket1 text='Penjualan'/>
                     </View>
                     <View style={{marginTop:8}}>
                         <Font12mediumhitam text={tglku}/>
                     </View>
                 </TouchableOpacity>
 
                 <Nominalpenjualan tglku={tglku}/>
             </View>
         </View>
 
                 <DateTimePickerModal
                     isVisible={isDatePickerVisible}
                     mode="date"
                     onConfirm={handleConfirm}
                     onCancel={hideDatePicker}
                 />
         </>
        
        :
        null
        }
        
    </View>
   
    );
}
const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Hasilpenjualan)
