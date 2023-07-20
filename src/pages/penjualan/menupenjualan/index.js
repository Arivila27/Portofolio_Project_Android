import React,{useState,useEffect} from 'react'; 

import {View,StyleSheet,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
import Tdatameja from '../../../components/templates/pesanmeja/datameja/tdatameja';
import TabViewExample from '../../../components/templates/pejualan/menupenjualan/tmenupenjualan';
import Informasipelanggan from '../../../components/templates/pejualan/informasipelanggan';
import Tlihatpesanan from '../../../components/templates/pejualan/lihatpesanan/tlihatpesanan';
import { myColor } from '../../../assets/color';
import { useDispatch,useSelector } from 'react-redux'
import {tambahCounter , kurangCounter,updateDataMakanan, updateDataPesanan} from './../../../redux/action' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { myApi } from '../../../config/service/api';
import axios from 'axios';
import { connect } from 'react-redux';
import { addBiliard, addDataLogin, addProducts, clearall, deleteCart, deleteTable, deleteUser } from '../../../redux/shopping/shoppingaction';
const Menupenjualan = ({props,cart,statusku,datalogin}) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const Globalstate = useSelector(data => data);
    // console.log("Global State " , Globalstate.reducerDataMakanan)
    const [data ,setData]= useState ([])

    
    useEffect(() => {
        // console.log("HELLOW",datalogin)
        dispatch(deleteCart())
        dispatch(deleteUser())
        dispatch(deleteTable())
        dispatch(addBiliard(""))
        dispatch(clearall())
        const getData = async () => {
            const idnya2 = await AsyncStorage.getItem('DATALOGIN')
            const idnya = JSON.stringify(idnya2)
            let jsonObject = JSON.parse(idnya)
            
            var myObj = JSON.parse(jsonObject)
            dispatch(addDataLogin(myObj))
            axios.get(`${myApi.URL}/items/listItemAll`,{
                headers:{
                    'auth-token':myObj.userToken
                }
             })
             .then(response =>{
                setData(response.data)
                // console.log('Fungtion')    
                //console.log("RESPONSE API PRODUCTS",response.data)
                dispatch(addProducts(response.data))              
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
        
    <View style={{backgroundColor:myColor.putih, height:'100%'}}>
        {/* <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
        //   value={query}
        //   onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20, marginBottom : 10 }}
        />         */}
        <TabViewExample/>
        <Informasipelanggan/>
        {/* <Tlihatpesanan/> */}
    </View>
   
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    statusku: state.shop.statusku,
    datalogin: state.shop.datalogin,

});

export default connect(mapStateToProps)(Menupenjualan)
