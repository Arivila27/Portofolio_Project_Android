import React  ,{useEffect,useState}from 'react'; 
import {View,TouchableOpacity,FlatList,Dimensions,Image} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { myColor } from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import { myApi } from '../../../config/service/api';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12regular from '../../atoms/font12regular';
import Font12regularcenter from '../../atoms/fon12regularcenter';
import Font16mediumhitam from '../../atoms/font16mediumhitam';
import Font16bregularhitam from '../../atoms/font16regularhitam';
import Font14mediumhitam from '../../atoms/font14mediumhitam';
import numberFormat from '../../../utils/numberFormat';

const Listbill = (props) => {
    const navigation = useNavigation();
    const [jumlah2,setJumlah2] = useState(0)
    const [siang, setSiang] = useState(0);
    const [malam, setMalam] = useState(0);

    
    // console.log("BAAAKKKKSOSOOOOOOO ", props.itemCategory)

    useEffect(() => {  
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
            .then(response=>{
            setSiang(response.data[0].itemPrice)
            setMalam(response.data[1].itemPrice)
            if(isDayTime===true){
                console.log("HAI 1")
                setJumlah2(response.data[0].itemPrice)
            }else{
                console.log("HAI 2")
                setJumlah2(response.data[1].itemPrice)
            }
            }).catch(error => {
            setIsLoading(false)
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
    },[]);
   
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:160 ,flexWrap:'wrap'}}>
                    <Font14mediumhitam text={props.itemName}/>
                </View>
                <View style={{flexDirection:'row',marginRight:35}}>
                    <Font14mediumhitam text="x"/>
                    <View>
                        <Font14mediumhitam text={props.itemQty}/>
                    </View>
                </View>
                {/* } */}
            </View>
            {
                props.itemCategory === "1" ?
                <Font14mediumhitam text={numberFormat(props.itemQty * jumlah2)}/>
                :
                <Font14mediumhitam text={props.itemPrice}/>
            }
        </View>
   
    );
}
export default Listbill



