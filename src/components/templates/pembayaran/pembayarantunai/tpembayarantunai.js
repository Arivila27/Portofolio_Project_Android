import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList,Dimensions,Image, TextInput,Text, ToastAndroid} from 'react-native';
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
import CurrencyInput from 'react-native-currency-input';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import Buttonbawahorange from '../../../atoms/buttonbawahorange';
import Font14regularhitam from '../../../atoms/font14regularhitam';
import Font24boldorange from '../../../atoms/font24boldorange';
import Font14boldhitam from '../../../atoms/font14boldhitam';
import { connect } from 'react-redux';
import numberFormat from '../../../../utils/numberFormat';
import { useDispatch } from 'react-redux';
import { addUangditerima , addPembayaran, addStatus } from '../../../../redux/shopping/shoppingaction';
import moment from 'moment';
import axios from 'axios';
import { myApi } from '../../../../config/service/api';


const Tpembayarantunai= ({totalBayar,cart,infoMeja,infoUser,token,statusku,datalogin,cart2,diskon,...props}) => {
    
    const route = useRoute();

    console.log("USE ROUTE T TUNAI", route.params.idTrans )
    console.log("USE ROUTE T TUNAI", route.params.nama)

    console.log("Diskon", diskon)

    
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [nominal , setNominal] = useState('');
    const [email, setEmail] = useState('');
    console.log("NOMINAL ,",nominal)
    const nominalnya = (newText) => {
        console.log("ISI NOMINAL",newText);
        setNominal(newText)
    }

    dispatch(addUangditerima(nominal))

    const waktuku = moment(new Date()).format("hh:mm")
    const tglku = moment(new Date()).format("DD-MM-YYYY")

    var arrayku = [];
    cart.map((obj)=> {
        return arrayku.push( {
            _id: obj._id,
            itemCode: obj.itemCode,
            itemName: obj.itemName,
            itemPrice: obj.itemPrice,
            itemImage: obj.itemImage,
            itemQty: obj.itemQty,
            itemNoted: obj.itemNoted
        })
    })

    return (
    <View style={{flex:1}}>
        <View style={{marginHorizontal:20,padding:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                <Font14regularhitam text='No Order / Transaksi'/>
                <Font14mediumorange text={'# '+route.params.idTrans}/>
            </View>

            <View style={{marginTop:14,backgroundColor:myColor.warnario1, opacity:0.5,height:100,width:'100%',borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                <Font14mediumhitam text="Total Tagihan"/>
                <View style={{marginTop:10}}>
                    <Font24boldorange text={numberFormat(totalBayar.total - diskon )}/>
                </View>
            </View>
            <Garis/>
            <View style={{marginTop:30,marginBottom:60}}>
            <CurrencyInput
                value={nominal}
                onChangeValue={setNominal}
                prefix="Rp"
                delimiter=","
                separator="."
                precision={0}
                onChangeText={(formattedValue) => {
                    console.log(formattedValue); // $2,310.46
                }}
                style={{textAlign:'center', borderWidth:1,borderColor:myColor.inputan1,borderRadius:10}}
            />
                {/* <TextInput 
                placeholder='Masukkan Nominal' keyboardType='numeric' value={nominal} onChangeText={nominalnya}
                style={{textAlign:'center', borderWidth:1,borderColor:myColor.inputan1,borderRadius:10}} /> */}
                <View style={{alignItems:'center',marginTop:15}}>
                    <TouchableOpacity onPress={()=>{
                        const total =totalBayar.total  - diskon
                        setNominal(total.toString())
                        console.log(total)
                        }}>
                        <Font14mediumorange text="Uang Pas"/>
                    </TouchableOpacity>
                </View>
            </View>

            <Font14mediumabuabu text="Jumlah Lainnya"/>

            <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                <TouchableOpacity
                onPress={()=>{setNominal('50000')}}
                style={{marginBottom:8, width:`${100/2-5}%`,height:46,borderRadius:6,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:myColor.abuabu}}>
                    <Font14mediumhitam text="50.000"/>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setNominal('100000')}}
                style={{marginBottom:8, width:`${100/2-5}%`,height:46,borderRadius:6,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:myColor.abuabu}}>
                    <Font14mediumhitam text="100.000"/>  
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setNominal('150000')}}
                style={{marginBottom:8, width:`${100/2-5}%`,height:46,borderRadius:6,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:myColor.abuabu}}>
                    <Font14mediumhitam text="150.000"/>  
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setNominal('200000')}}
                style={{marginBottom:8, width:`${100/2-5}%`,height:46,borderRadius:6,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:myColor.abuabu}}>
                    <Font14mediumhitam text="200.000"/>  
                </TouchableOpacity>
            </View>

        </View>

        <Buttonbawahorange text="Bayar" onPress={()=>{
            if(totalBayar.total  - diskon > nominal){
                ToastAndroid.show("Maaf Uang Kurang", ToastAndroid.LONG)
            }else{
                cart.map((obj)=> {
                    console.log("STEP 0000000000000000000000000000000000000000000000000", obj);
                    if(obj.itemNoted === "open"){
                        console.log("STEP 1");
                        const objecknya = {
                            itemStatus: "true",
                            itemNoted : '',
                            itemStart:'0',
                            itemQty : 0
                        }
                        axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                              ).then(response =>{
                                  console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                  axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/2`
                                    ).then(response =>{
                                        console.log("RESPON LAMPU",response.data)
                                        console.log("BERHASIL UPDATE")
                                    }).catch(error => {
                                        console.log('Ini Eror',error)
                                    })
                              }).catch(error => {
                                  console.log('Ini Eror',error)
                              })
                        }else if(obj.itemNoted === "1"){
                            console.log("NGGEH MASUK SINI")
                            const objecknya = {
                                itemStatus: "true",
                                itemNoted : '',
                                itemStart:'0',
                                itemQty : 0
                            }
                            axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                              ).then(response =>{
                                  console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                  axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/2`
                                    ).then(response =>{
                                        console.log("RESPON LAMPU",response.data)
                                        console.log("BERHASIL UPDATE")
                                    }).catch(error => {
                                        console.log('Ini Eror',error)
                                    })
                              }).catch(error => {
                                  console.log('Ini Eror',error)
                              })
                        }
                })

                const tokennya = token
                    const objecknya = {
                            transId: route.params.idTrans,
                            transName: infoUser.nama,
                            transDiskon:diskon,
                            transDate:tglku.toString(),
                            transTime:waktuku.toString(),
                            transtable: infoMeja.mejaNumber,
                            transStatusPayment:"yes",
                            transPayment: "Tunai",
                            transKasir:datalogin.userName,
                            transTotalBayar: totalBayar.total - totalBayar.ppn,
                            transTotalPPN :  totalBayar.ppn, 
                            tranBayar: 0,
                            transKembali: 0,
                            transPesanan: arrayku
                    }
                    const objecknya2 = {
                        transKasir:datalogin.userName,
                        transDiskon:diskon,
                        transStatusPayment:"yes",
                        transPayment: "Tunai",
                        transTotalBayar: totalBayar.total - totalBayar.ppn,
                        transTotalPPN:totalBayar.ppn,
                        transPesanan: arrayku
                    }
                    console.log("INIISINYA objek" , objecknya)
                    if(cart2.length == 0){
                        axios.post(`${myApi.URL}/transjual/createTrans`,objecknya,{
                            headers:{
                                'auth-token':tokennya
                            }
                        }).then(response =>{
                            axios.patch(`${myApi.URL}/mejas/updatemeja/${infoMeja._id}`,{
                                mejaStatus: "yes"
                            },{
                                headers:{
                                    'auth-token':tokennya
                                }
                            }).then(response =>{
                                console.log('BISA APAA')
                                console.log("RESPON API JOSS",response.data)
                                
                            }).catch(error => {
                                console.log('Ini Eror',error)
                            })
    
                            console.log('BISA')
                            console.log("RESPON API PAK AVIV",response.data)
                            // dispatch(addStatus(!statusku))
                            
                        }).catch(error => {
                            console.log('Ini Eror',error)
                        })
                    }else{
                        console.log("Masuk sini")
                        console.log("MASUK SINI LAGI", infoUser.trans_id)
                        axios.post(`${myApi.URL}/transjual/updateTrans/${infoUser.trans_id}`,objecknya2,{
                            headers:{
                                'auth-token':tokennya
                            }
                        }).then(response =>{
                            // dispatch(addStatus(!statusku))
                            console.log('BISA APAA')
                            console.log("RESPON API JOSS",response.data)
                            // navigation.navigate('Menupenjualan')  
                        }).catch(error => {
                            console.log('Ini Eror',error)
                        })
                    }

                dispatch(addPembayaran('Tunai'))
                navigation.navigate('Pembayaranselesai',{tanggal:tglku.toString() , waktu:waktuku.toString() ,idTrans:route.params.idTrans, transBayar2:props.transBayar})
            }
        }}/>
    </View>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    infoMeja: state.shop.infoMeja,
    infoUser: state.shop.infoUser,
    token: state.shop.token,
    statusku: state.shop.statusku,
    datalogin: state.shop.datalogin,
    cart2: state.shop.cart2,
    totalBayar: state.shop.totalBayar,
    diskon: state.shop.diskon,

});

export default connect(mapStateToProps)(Tpembayarantunai)

