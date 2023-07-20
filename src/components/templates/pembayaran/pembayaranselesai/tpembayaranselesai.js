import React, { useState,useEffect } from 'react'; 

import {View,TouchableOpacity,FlatList,Dimensions,Image, TextInput} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import Font14mediumhitam from '../../../atoms/font14mediumhitam';
import Tidakadadata from '../../../atoms/404';
import Tambahdataicon from '../../../atoms/tambahdata';
import Font12regular from '../../../atoms/font12regular';
import Font12regularputih from '../../../atoms/font12regularputih';
import Font12mediumputih from '../../../atoms/font12mediumputih';
import Font14boldputih from '../../../atoms/font14boldputih';
import Font14bold from '../../../atoms/font14bold';
import Font16boldhitam from '../../../atoms/font16boldhitam';
import Font16bregularhitam from '../../../atoms/font16regularhitam';
import Font16mediumhitam from '../../../atoms/font16mediumhitam';
import Listpesanan from '../../../organisms/penjualan/listpesanan';
import Font14mediumabuabu from '../../../atoms/font14mediumabuabu';
import Font14mediumorange from '../../../atoms/font14mediumorange';
import Listbill from '../../../organisms/penjualan/listbill';
import Listinformasitransaksi from '../../../organisms/penjualan/listinformasitransaksi';
import Listbold from '../../../organisms/penjualan/listbold';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { connect } from 'react-redux';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import Buttonbawahorange from '../../../atoms/buttonbawahorange';
import Font14regularhitam from '../../../atoms/font14regularhitam';
import Font24boldorange from '../../../atoms/font24boldorange';
import Font14boldhitam from '../../../atoms/font14boldhitam';
import { myApi } from '../../../../config/service/api';
import moment from 'moment';
import axios from 'axios';
import numberFormat from '../../../../utils/numberFormat';
import { useDispatch } from 'react-redux';
import { addUangkembali } from '../../../../redux/shopping/shoppingaction';


const Tpembayaranselesai = ({token,totalBayar,uangditerima,pembayaran,diskon,...props}) => {

    const dispatch = useDispatch();
    const [jumlah,setJumlah] = useState(0)

    dispatch(addUangkembali(uangditerima - totalBayar.total))
    const navigation = useNavigation();
    
    const route = useRoute();

    console.log("USE ROUTE T TUNAI", route.params.tanggal )
    console.log("USE ROUTE T TUNAI", route.params.waktu )
    useEffect(() => {
            const getData = async () => {
                await axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
                .then(response=>{
                   const siang =response.data[0].itemPrice
                   const malam = response.data[1].itemPrice
                   axios.get(`${myApi.URL}/transjual/listTransById/${route.params.idTrans}`,{
                    headers:{
                        'auth-token':token
                    }
                    })
                    .then(response =>{
                    // console.log('Fungtion')    
                        console.log("RESPONSE API DETAIL LIST TRANSAKSI STATUS",response.data)
                    for (let index = 0; index < response.data.transPesanan.length; index++) {
                        if (response.data.transPesanan[index].itemNoted==="open") {
                            const hours = new Date().getHours()
                            const isDayTime = hours > 6 && hours < 18
                            var today2 = new Date() ;
                            var last2 = response.data.transCreated
                            var momentsatu2 = moment(today2).format();
                            var momentdua2 = moment(last2).format();
                            var duration2 = moment.duration(moment(momentsatu2).diff(momentdua2));
                            var hours2 = duration2.asMinutes();
                            var coba2 = Math.floor(hours2)
                            var time = parseInt(coba2)
                            if(isDayTime===true){
                                const inijumlah = time * (siang / 60)
                                setJumlah(inijumlah)
                                // dispatch(adjustItemPrice(id, 1, Math.floor(inijumlah)))
                            }else{
                                const inijumlah = time * (malam / 60)
                                setJumlah(inijumlah)
                                // dispatch(adjustItemPrice(id, 1, Math.floor(inijumlah)))
                            }
                        } else {
                            
                        }
                        
                    }
                    
                }).catch(error => {
                    // console.log('Ini Eror 2',error)
                    // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
                })
                }).catch(error => {
                   setIsLoading(false)
                   // console.log('Ini Eror 2',error)
                   // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
               })
            //   dispatch(updateDataMakanan(datamakanan))
            
            }
        setTimeout(() => {
            getData()
        }, )
        }, [])
    
    return (
    <View style={{flex:1,backgroundColor:myColor.putih}}>
        <View style={{marginHorizontal:20,padding:20}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image
                    resizeMode='contain'
                    style={{height:119, width:200,borderRadius:10}}
                    source={require('./../../../../assets/icon/centang.png')}
                    />
                <View style={{marginTop:40}}>
                    <Font14mediumhitam text="Transaksi Berhasil"/>
                </View>
            </View>
            
            <Garis/>

            <View style={{marginTop:30,marginBottom:60}}>
               <Listinformasitransaksi keys="Nomor Transaksi" value={route.params.idTrans}/>
               <Listinformasitransaksi keys="Pembayaran" value={pembayaran}/>
               <Listinformasitransaksi keys="Total" value={numberFormat(totalBayar.total - diskon )}/>
               <Listinformasitransaksi keys="Uang Diterima" value={numberFormat(uangditerima)}/>
               <Listinformasitransaksi keys="Uang Kembalian" value={numberFormat(uangditerima - totalBayar.total + diskon )}/>
            </View>
        </View>
        <Buttonbawahorange text="Cetak Nota" onPress={()=>{navigation.navigate('Cetaknota',{jumlahnya : jumlah, tanggal:route.params.tanggal , waktu:route.params.waktu,transBayar2:props.transBayar})}}/>
    </View>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    totalBayar: state.shop.totalBayar,
    uangditerima: state.shop.uangditerima,
    pembayaran: state.shop.pembayaran,
    token: state.shop.token,
    diskon: state.shop.diskon,


});

export default connect(mapStateToProps)(Tpembayaranselesai)

