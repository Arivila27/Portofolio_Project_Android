import React ,{useEffect,useState}from 'react'; 
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import Tanggalsekarang from '../../molecules/home/tanggalsekarang';
import Nominalpenjualan from '../../molecules/home/nominalpenjualan';
import Namatoko from '../../molecules/home/namatoko';
import { myColor } from '../../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';

import Font12mediumhitam from '../../atoms/font12medium';
import Font14mediumorange from '../../atoms/font14mediumorange';
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../../../redux/shopping/shoppingaction';

import Font14boldputih from '../../atoms/font14boldputih';
import { navigationPush } from '../../../utils/navigationMethods';
import axios from 'axios';
import { myApi } from '../../../config/service/api';
const Carticonku = ({statusku,token}) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const getData = async () => {
            axios.get(`${myApi.URL}/transjual/listTransStatus/no`,{
                headers:{
                    'auth-token':token
                }
             })
             .then(response =>{
                console.log('Fungtion')    
                console.log("RESPONSE API LIST TRANSAKSI STATUS",response.data)
                setCartCount(response.data.length)
            }).catch(error => {
                // console.log('Ini Eror 2',error)
                // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
        //   dispatch(updateDataMakanan(datamakanan))
        }
  
    setTimeout(() => {
      getData()
    }, )
  }, [statusku])
    return (

        <View style={{flexDirection:'row'}}>
        {/* <TouchableOpacity onPress={()=>{navigationPush('Searchitem')}}>
            <View style={{justifyContent:'center',alignItems:'center',height:40,marginRight:10}}>
                <Icon
                    name='search'
                    size={20}
                    color={myColor.putih}
                />
            </View>
        </TouchableOpacity> */}

        <TouchableOpacity 
        onPress={()=> navigationPush('Listtransaksi')}
        style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',height:40}} >
                <View style={{justifyContent:'center'}}>
                    <Icon
                        name='shopping-cart'
                        size={25}
                        color={myColor.putih}
                    />
                </View>
                <Font14boldputih text={cartCount}/>
            </View>
            {/* <View style={{justifyContent:'center',alignItems:'center',marginLeft:10}}>
                <View style={{justifyContent:'center',alignItems:'center', backgroundColor:myColor.warna1,width:40,height:20,borderRadius:50}}>
                </View>
            </View> */}
        </TouchableOpacity>

        </View>

    );
}
const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Carticonku)




