import React ,{useState,useEffect}from 'react'; 

import {View,StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
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
import Tdetailpesanan from '../../../components/templates/pejualan/detailpesanan/tdetailpesanan';
import Font12regular from '../../../components/atoms/font12regular';
import Font14regularhitam from '../../../components/atoms/font14regularhitam';
import Font14bold from '../../../components/atoms/font14bold';
import Font14boldhitam from '../../../components/atoms/font14boldhitam';
import Font16boldwarna1 from '../../../components/atoms/font16boldwarna1';
import Font14mediumhitam from '../../../components/atoms/font14mediumhitam';
import { useDispatch,useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { addCount, addStatus ,addBiliard, addWaiters } from '../../../redux/shopping/shoppingaction';
import numberFormat from '../../../utils/numberFormat';
import axios from 'axios';
import { myApi } from '../../../config/service/api';
import { Axiosku } from '../../../utils/axios';

import moment from 'moment';
import Font14mediumabuabu from '../../../components/atoms/font14mediumabuabu';
import ThermalPrinterModule from 'react-native-thermal-printer';
import Loading from '../../../components/atoms/loading';


const Detailpesanan = ({props,cart,infoMeja,mejaBilliard,infoUser,idtrns,infoWaiters,token,statusku,datalogin,cart2}) => {


    // console.log("CART DETAIL PESANAN CART 2" , cart2)
    const [isLoading, setIsLoading] = useState(false);
    const [jumlah,setJumlah] = useState(0);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPrice2, setTotalPrice2] = useState(0);
    const [totalPrice3, setTotalPrice3] = useState(0);
    const [ppnya , setTotalppn] = useState(0);
    const [ppnya2 , setTotalppn2] = useState(0);
    
    const [siang,setSiang] = useState(0);
    const [malam,setMalam] = useState(0);
    

    const [totalItems, setTotalItems] = useState(0);
    const [idTrans, setIdtrans] = useState('');
    //console.log("PAGE Detail Pesanan", statusku)
    const waktuku = moment(new Date()).format("HH:mm")
    const tglku = moment(new Date()).format("DD-MM-YYYY")
    const tglkudua = moment(new Date()).format("DD-MM-YYYY HH:mm:ss")
    
    const [nama, setNama] = useState(0);
    //const [meja, setMeja] = useState('0');
    var statustiga ;
    var statusdua ;
    var state = {
        text:
          "[C]<u><font size='big'>Rio Billiard And Bistro</font></u>\n" +
          '[L]\n' +
          '[C]========================================\n' +
          `[L]Pelanggan [R] ${infoUser.nama} \n`+
          `[L]Waiters [R] ${infoWaiters.waiters} \n`+
          `[L]Waktu [R] ${tglkudua} \n`+
          `[L]Kasir [R] ${datalogin.userName} \n` +
          `[L]No Meja/Biliard [R] ${infoMeja.mejaNumber} / ${mejaBilliard} \n` +
          '[C]----------------------------------------\n' +
          '[L]\n' +
          `[L] PESANAN/ORDER LIST` +
          '[L]\n' +
          '[C]----------------------------------------\n' +
          `${cart.map((obj)=> {
            if (obj.itemCategory==="MAKANAN") {
                statustiga = 1;
                return ( `[L]<b>${obj.itemName}</b>  [C](${obj.itemNoted})  [R]x ${obj.itemQty} \n`)
            } 
            })}` +
          '[C]----------------------------------------\n' +
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'
      };
      var statedua = {
        text:
          "[C]<u><font size='big'>Rio Billiard And Bistro</font></u>\n" +
          '[L]\n' +
          '[C]========================================\n' +
          `[L]Pelanggan [R] ${infoUser.nama} \n`+
          `[L]Waiters [R] ${infoWaiters.waiters} \n`+
          `[L]Waktu [R] ${tglkudua} \n`+
          `[L]Kasir [R] ${datalogin.userName} \n` +
          `[L]No Meja/Biliard [R] ${infoMeja.mejaNumber} / ${mejaBilliard} \n` +
          '[C]----------------------------------------\n' +
          '[L]\n' +
          `[L] PESANAN/ORDER LIST` +
          '[L]\n' +
          '[C]----------------------------------------\n' +
          `${cart.map((obj)=> {
            if (obj.itemCategory==="MINUMAN") {
                statusdua = 1;
                return ( `[L]<b>${obj.itemName}</b>  [C](${obj.itemNoted})  [R]x ${obj.itemQty} \n`  ) 
            } 
            })}` +
          '[C]----------------------------------------\n' +
        
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'
      }
      var statetiga = {
        text:
          "[C]<u><font size='big'>Rio Billiard And Bistro</font></u>\n" +
          '[L]\n' +
          '[C]========================================\n' +
          `[L]Pelanggan [R] ${infoUser.nama} \n`+
          `[L]Waiters [R] ${infoWaiters.waiters} \n`+
          `[L]Waktu [R] ${tglkudua} \n`+
          `[L]Kasir [R] ${datalogin.userName} \n` +
          `[L]No Meja/Biliard [R] ${infoMeja.mejaNumber} / ${mejaBilliard} \n` +
          '[C]----------------------------------------\n' +
          '[L]\n' +
          `[L] PESANAN/ORDER LIST` +
          '[L]\n' +
          '[C]----------------------------------------\n' +
          `${cart.map((obj)=> {
                return ( `[L]<b>${obj.itemName}</b>  [C](${obj.itemNoted})  [R]x ${obj.itemQty} \n`)
            })}` +
          '[C]----------------------------------------\n' +
        
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'
      }


    var arrayku = []
    var arrayku2 = cart2


    cart.map((obj)=> {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        if(isDayTime===true){
            if(obj.itemCategory === "MEJA"){
                return arrayku.push({
                    _id: obj._id,
                    itemCode: obj.itemCode,
                    itemName: obj.itemName,
                    itemPrice: siang,
                    itemImage: obj.itemImage,
                    itemQty: obj.itemQty,
                    priceType : obj.priceType,
                    itemNoted: obj.itemNoted
                })
            }else{
                return arrayku.push({
                    _id: obj._id,
                    itemCode: obj.itemCode,
                    itemName: obj.itemName,
                    itemPrice: obj.itemPrice,
                    itemImage: obj.itemImage,
                    itemQty: obj.itemQty,
                    priceType : obj.priceType,
                    itemNoted: obj.itemNoted
                })
            }
        }else{
            if(obj.itemCategory === "MEJA"){
                return arrayku.push({
                    _id: obj._id,
                    itemCode: obj.itemCode,
                    itemName: obj.itemName,
                    itemPrice: malam,
                    itemImage: obj.itemImage,
                    itemQty: obj.itemQty,
                    priceType : obj.priceType,
                    itemNoted: obj.itemNoted
                })
            }else{
                return arrayku.push({
                    _id: obj._id,
                    itemCode: obj.itemCode,
                    itemName: obj.itemName,
                    itemPrice: obj.itemPrice,
                    itemImage: obj.itemImage,
                    itemQty: obj.itemQty,
                    priceType : obj.priceType,
                    itemNoted: obj.itemNoted
                })
            }
        }
       
    })



    // console.log("QOMAR", `${myApi.URL}/transjual/listTransAllbyDatee/${tglku.toString()}`)
    
    axios.get(`${myApi.URL}/transjual/listTransAllbyDatee/${tglku.toString()}`,{
    }).then(response =>{
        // console.log('BISA')
        // console.log('KUPON KU ' , response.data.length)
        setIdtrans(response.data.length + 1);
    }).catch(error => {
        console.log('Ini Eror',error)
        ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
    })

    const printDapurMeja =async () =>{
            try {
                if (statustiga===1 && statusdua===1) {
                        await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.26',
                        port: 9100,
                        payload: statedua.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                        });
                        ToastAndroid.show("Berhasil Print di Bar",ToastAndroid.LONG)
                        await ThermalPrinterModule.printTcp({
                            ip: '192.168.100.27',
                            port: 9100,
                            payload: state.text,
                            printerWidthMM: 80,
                            timeout: 80000, // in milliseconds (version >= 2.2.0)
                            
                        });
                        ToastAndroid.show("Berhasil Print di Kitchen",ToastAndroid.LONG)
                        await ThermalPrinterModule.printTcp({
                            ip: '192.168.100.28',
                            port: 9100,
                            payload: statetiga.text,
                            printerWidthMM: 80,
                            timeout: 80000, // in milliseconds (version >= 2.2.0)
                            
                        });
                        ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                        dispatch(addBiliard(""))
                        dispatch(addWaiters(""))
                } else if(statustiga===1 && statusdua!==1) {
                    await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.27',
                        port: 9100,
                        payload: state.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                        });
                        ToastAndroid.show("Berhasil Print di Kitchen",ToastAndroid.LONG)
                        await ThermalPrinterModule.printTcp({
                            ip: '192.168.100.28',
                            port: 9100,
                            payload: statetiga.text,
                            printerWidthMM: 80,
                            timeout: 80000, // in milliseconds (version >= 2.2.0)
                            
                        });
                        ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                        dispatch(addBiliard(""))
                        dispatch(addWaiters(""))
                }else if(statustiga!==1 && statusdua===1){
                    await ThermalPrinterModule.printTcp({
                            ip: '192.168.100.26',
                            port: 9100,
                            payload: statedua.text,
                            printerWidthMM: 80,
                            timeout: 80000, // in milliseconds (version >= 2.2.0)
                            
                        });
                        ToastAndroid.show("Berhasil Print di Bar",ToastAndroid.LONG)
                        await ThermalPrinterModule.printTcp({
                            ip: '192.168.100.28',
                            port: 9100,
                            payload: statetiga.text,
                            printerWidthMM: 80,
                            timeout: 80000, // in milliseconds (version >= 2.2.0)
                            
                        });
                        ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                        dispatch(addBiliard(""))
                        dispatch(addWaiters(""))
                }else{
                    dispatch(addBiliard(""))
                    dispatch(addWaiters(""))
                    console.log("TIDAK ADA PRINT")
                }
            console.log("MASUK SINI DULU")
            } catch (err) {
            //error handling
            dispatch(addBiliard(""))
            dispatch(addWaiters(""))
            navigation.navigate('Home')
            //console.log(err.message);
            }
    }
    const printDapurMejaDua =async () =>{
        try {
            if (statustiga===1 && statusdua===1) {
                    await ThermalPrinterModule.printTcp({
                    ip: '192.168.100.26',
                    port: 9100,
                    payload: statedua.text,
                    printerWidthMM: 80,
                    timeout: 80000, // in milliseconds (version >= 2.2.0)
                    
                    });
                    ToastAndroid.show("Berhasil Print di Bar",ToastAndroid.LONG)
                    await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.27',
                        port: 9100,
                        payload: state.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                    });
                    ToastAndroid.show("Berhasil Print di Kitchen",ToastAndroid.LONG)
                    await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.28',
                        port: 9100,
                        payload: statetiga.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                    });
                    ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                     dispatch(addBiliard(""))
            } else if(statustiga===1 && statusdua!==1) {
                await ThermalPrinterModule.printTcp({
                    ip: '192.168.100.27',
                    port: 9100,
                    payload: state.text,
                    printerWidthMM: 80,
                    timeout: 80000, // in milliseconds (version >= 2.2.0)
                    
                    });
                    ToastAndroid.show("Berhasil Print di Kitchen",ToastAndroid.LONG)
                    await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.28',
                        port: 9100,
                        payload: statetiga.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                    });
                    ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                     dispatch(addBiliard(""))
            }else if(statustiga!==1 && statusdua===1){
                await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.26',
                        port: 9100,
                        payload: statedua.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                    });
                    ToastAndroid.show("Berhasil Print di Bar",ToastAndroid.LONG)
                    await ThermalPrinterModule.printTcp({
                        ip: '192.168.100.28',
                        port: 9100,
                        payload: statetiga.text,
                        printerWidthMM: 80,
                        timeout: 80000, // in milliseconds (version >= 2.2.0)
                        
                    });
                    ToastAndroid.show("Berhasil Print di Checker",ToastAndroid.LONG)
                    dispatch(addBiliard(""))
            }else{
                console.log("TIDAK ADA PRINT")
                
                dispatch(addBiliard(""))
            }
        dispatch(addWaiters(""))
        console.log("MASUK SINI DULU")
        } catch (err) {
        //error handling
        dispatch(addBiliard(""))
        dispatch(addWaiters(""))
        navigation.navigate('Pembayaran',{idTrans: idTrans,nama:infoUser.nama,waiters:infoWaiters.waiters})
         dispatch(addCount({total: (totalPrice + Math.floor(totalPrice * 10 / 100)) - ppnya , ppn:(totalPrice * 0.1 - ppnya) , ppndua : ppnya}))
        //console.log(err.message);
        }
}

    useEffect(() => {
        const getData = async () => {
        await axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
            .then(response=>{
            setSiang(response.data[0].itemPrice)
            setMalam(response.data[1].itemPrice)
            }).catch(error => {
            setIsLoading(false)
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        console.log("COBA IOT",)
        let items = 0;
        var price = 0;
        var ppn = 0;
        await cart.forEach((item) => {
            const hours = new Date().getHours()
            const isDayTime = hours > 6 && hours < 18
            if(isDayTime===true){
                if(item.itemCategory === "MEJA"){
                    price += item.itemQty * siang
                    ppn += item.itemQty * siang * 10 / 100
                
                    //setMeja(item.itemName)
                }else{
                    price += item.itemQty * item.itemPrice;
                }
            }else{
                if(item.itemCategory === "MEJA"){
                    price += item.itemQty * malam
                    ppn += item.itemQty * malam * 10 / 100
                    //setMeja(item.itemName)
                }else{
                    price += item.itemQty * item.itemPrice;
                }
            }
            // console.log("cobaaa", item.itemCategory)
             console.log("cobaaaa ppn 1" ,ppn)
            
        });
        let pricemejasewa2;
        let price2 = 0;
        var ppndua = 0;
        await cart2.forEach((item) => {
            const hours = new Date().getHours()
            const isDayTime = hours > 6 && hours < 18
            if(isDayTime===true){
                if(item.itemNoted === "1"){
                    price2 += item.itemQty * siang
                    ppndua += item.itemQty * siang * 10 / 100
                    console.log("MASUK SINI MEJAaaaaaa")
                }else{
                    price2 += item.itemQty * item.itemPrice;
                }
            }else{
                if(item.itemNoted === "1"){
                    price2 += item.itemQty * malam
                    ppndua += item.itemQty * malam * 10 / 100
                }else{
                    price2 += item.itemQty * item.itemPrice;
                }
            }
            console.log("cobaaaa ppn 2" ,ppndua)
        
        });

        setTotalItems(items);
        setTotalPrice(price);
        setTotalppn(ppn)
        setTotalPrice2(price2);
        setTotalPrice3(price+price2)
        setTotalppn2(ppn+ppndua)
        }
        setTimeout(() => {
            getData()
          }, )
        }, [ cart, totalPrice, totalItems, ppnya,setTotalppn, setTotalPrice, setTotalItems])
    return (
        
    <View style={{flex:1}}>        
       <Tdetailpesanan/>
        <View style={{paddingTop:10,paddingHorizontal:22, position:'absolute',borderTopLeftRadius:20,borderTopRightRadius:20,bottom:0,backgroundColor:myColor.putih,width:'100%'}}>
            {/* <Font14regularhitam text={totalItems + " Items"}/> */}
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Font14mediumabuabu text="Sub Total"/>
                <Font14mediumabuabu text={numberFormat(totalPrice)}/>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between' , marginBottom:3}}>
                <Font14mediumabuabu text="PPn 10%"/>
                <Font14mediumabuabu text={numberFormat((totalPrice * 10 / 100) - ppnya)}/>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:3}}>
                <Font14boldhitam text="Total Tagihan"/>
                <Font16boldwarna1 text={numberFormat((totalPrice + Math.floor(totalPrice * 10 / 100)) - ppnya )}/>
                
            </View>
            <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>{
                    setIsLoading(true)
                    printDapurMeja();
                    console.log("ARRAY kuh ",arrayku.concat(arrayku2));
                    const arrayMerge = arrayku.concat(arrayku2)
                    const tokennya = token
                    const objecknya = {
                            transId: idTrans,
                            transName: infoUser.nama,
                            transDate:tglku.toString(),
                            transTime:waktuku.toString(),
                            transtable: infoMeja.mejaNumber,
                            transPayment: "",
                            transKasir:datalogin.userName,
                            transTotalBayar: totalPrice,
                            transTotalPPN : (totalPrice * 0.1 - ppnya),
                            tranBayar: 0,
                            transKembali: 0,
                            transCreated:new Date(),
                            transPesanan: arrayMerge
                    }

                    const objecknya2 = {
                        transTotalBayar: totalPrice3,
                        transTotalPPN : (totalPrice3 * 0.1 - ppnya2),
                        transPesanan: arrayMerge
                    }         
                    
                    console.log("INIISINYA objek" , objecknya)
                    console.log("INIISINYA ppn" , ppnya2)

                    if(cart2.length == 0){
                        axios.post(`${myApi.URL}/transjual/createTrans`,objecknya,{
                            headers:{
                                'auth-token':tokennya
                            }
                        }).then(response =>{                                            
                            // console.log('BISA')
                            // console.log("RESPON API PAK AVIV",response.data)
                            dispatch(addStatus(!statusku))
                            axios.patch(`${myApi.URL}/mejas/updatemeja/${infoMeja._id}`,{
                                mejaStatus: "yes"
                            },{
                                headers:{
                                    'auth-token':tokennya
                                }
                            }).then(response =>{
                                console.log('BISA APAA')                                          
                                //console.log("RESPON API JOSS",response.data)
                                navigation.navigate('Home')
                      
                            }).catch(error => {
                                setIsLoading(false)                                                
                                console.log('Ini Eror',error)
                            }) 
                        }).catch(error => {
                            setIsLoading(false)                                                
                            console.log('Ini Eror',error)
                        })

                    }else{
                        const objecknya3 = {
                            transCreated:new Date(),
                            transTotalBayar: totalPrice3,
                            transTotalPPN : (totalPrice3 * 0.1 - ppnya2),
                            transPesanan: arrayMerge
                        }
                        cart.map((obj)=> {
                            console.log("STEP 0000000000000000000000000000000000000000000000000");
                            if(obj.itemCategory === "MEJA"){
                                console.log("STEP 1");
                                //setMeja(obj.itemName)
                                var objecknya ;
                                if (obj.itemNoted==="open") {
                                    console.log("Masuk sini")
                                    console.log("MASUK SINI LAGI", idtrns.trans_id)
                                    axios.post(`${myApi.URL}/transjual/updateTrans/${idtrns.trans_id}`,objecknya3,{
                                        headers:{
                                            'auth-token':tokennya
                                        }
                                    }).then(response =>{
                                        setIsLoading(false)                                                
                                        dispatch(addStatus(!statusku))
                                        console.log('BISA APAA')
                                        //console.log("RESPON API JOSS",response.data)
                                        navigation.navigate('Home')
                                        
                                    }).catch(error => {
                                        setIsLoading(false)                                                
            
                                        console.log('Ini Eror',error)
                                    
                                    })            
                                }   
                            }else{

                                console.log("Masuk sini")
                                console.log("MASUK SINI LAGI", idtrns.trans_id)
                                axios.post(`${myApi.URL}/transjual/updateTrans/${idtrns.trans_id}`,objecknya2,{
                                    headers:{
                                        'auth-token':tokennya
                                    }
                                }).then(response =>{
                                    setIsLoading(false)                                                
                                    dispatch(addStatus(!statusku))
                                    console.log('BISA APAA')
                                    //console.log("RESPON API JOSS",response.data)
                                    navigation.navigate('Home')
                                    
                                }).catch(error => {
                                    setIsLoading(false)                                                
                                    console.log('Ini Eror',error)
                                
                                })
        

                            }
                        })

                       
                    }
                        cart.map((obj)=> {
                            console.log("STEP 0000000000000000000000000000000000000000000000000");
                            if(obj.itemCategory === "MEJA"){
                                console.log("STEP 1");
                                //setMeja(obj.itemName)
                                var objecknya ;
                                if (obj.itemNoted==="open") {
                                    console.log("STEP 2");
                                const objecknya = {
                                        itemStatus: "open",
                                        itemStart : new Date()
                                    }
                                    console.log("MAS BROO", )
                                    console.log("STEP URLNYA",`${myApi.URL}/items/updateItem/${obj._id}`)
                                    
                                    axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                                    ).then(response =>{                                              
                                        console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/1`
                                            ).then(response =>{                                          
                                                //console.log("RESPON LAMPU",response.data)
                                                console.log("BERHASIL UPDATE")
                                            }).catch(error => {
                                                setIsLoading(false)                                                
                                                console.log('Ini Eror',error)
                                            })
                                    }).catch(error => {
                                        setIsLoading(false)                                                
                                        console.log('Ini Eror',error)
                                    })
                                }else{
                                    console.log("STEP 3");
                                const objecknya = {
                                        itemStatus: "false",
                                        itemStart : new Date(),
                                        itemQty : obj.itemQty * 60
                                    }   
                                    
                                    axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                                    ).then(response =>{                                               
                                        console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/1`
                                            ).then(response =>{                                              
                                                //console.log("RESPON LAMPU",response.data)
                                                console.log("BERHASIL UPDATE")
                                            }).catch(error => {
                                                console.log('Ini Eror',error)
                                                setIsLoading(false)                                                
                                            })
                                    }).catch(error => {
                                        console.log('Ini Eror',error)
                                        setIsLoading(false)                                                
                                    })   
                                }
                            
                            }
                        })

                  

                    cart.map((obj)=> {
                        console.log("STEP 0000000000000000000000000000000000000000000000000");
                        if(obj.itemCategory === "MEJA"){
                            console.log("STEP 1");
                            //setMeja(obj.itemName)
                            var objecknya ;
                            if (obj.itemNoted==="open") {
                                console.log("STEP 2");
                            const objecknya = {
                                    itemStatus: "open",
                                    itemStart : new Date()
                                }
                                console.log("MAS BROO", )
                                console.log("STEP URLNYA",`${myApi.URL}/items/updateItem/${obj._id}`)
                                
                                axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                                ).then(response =>{                                              
                                    console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                    axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/1`
                                        ).then(response =>{                                          
                                            //console.log("RESPON LAMPU",response.data)
                                            console.log("BERHASIL UPDATE")
                                        }).catch(error => {
                                            setIsLoading(false)                                                
                                            console.log('Ini Eror',error)
                                        })
                                }).catch(error => {
                                    setIsLoading(false)                                                
                                    console.log('Ini Eror',error)
                                })
                            }else{
                                console.log("STEP 3");
                            const objecknya = {
                                    itemStatus: "false",
                                    itemStart : new Date(),
                                    itemQty : obj.itemQty * 60
                                }   
                                
                                axios.patch(`${myApi.URL}/items/updateItem/${obj._id}`,objecknya
                                ).then(response =>{                                               
                                    console.log("BERHASIL UPDATE MEJA BILLIARD ,")
                                    axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${obj.itemCode}/1`
                                        ).then(response =>{                                              
                                            //console.log("RESPON LAMPU",response.data)
                                            console.log("BERHASIL UPDATE")
                                        }).catch(error => {
                                            console.log('Ini Eror',error)
                                            setIsLoading(false)                                                
                                        })
                                }).catch(error => {
                                    console.log('Ini Eror',error)
                                    setIsLoading(false)                                                
                                })   
                            }
                        
                        }
                    })

                }}   
                style={{width:"48%",height:46,backgroundColor:myColor.tombol2,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                    <Font14mediumhitam text="Simpan"/>
                </TouchableOpacity>
                {
                    cart2.length == 0 ?
                    <TouchableOpacity 
                        onPress={()=>{
                            printDapurMejaDua()
                            navigation.navigate('Pembayaran',{idTrans: idTrans,nama:infoUser.nama,waiters:infoWaiters.waiters})
                            dispatch(addCount({total: (totalPrice + Math.floor(totalPrice * 10 / 100)) - ppnya , ppn:(totalPrice * 0.1 - ppnya) , ppndua : ppnya}))
                        }}
                        style={{width:"48%",height:46,backgroundColor:myColor.warna1,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                        <Font14mediumhitam text="Bayar"/>
                    </TouchableOpacity>
                    :null
                }
            </View>
        </View>
        { isLoading ? <Loading/> : null }
    </View>
   
    );
}

const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    infoMeja: state.shop.infoMeja,
    infoUser: state.shop.infoUser,
    idtrns: state.shop.idtrns,
    infoWaiters: state.shop.infoWaiters,
    mejaBilliard : state.shop.mejaBilliard,
    token: state.shop.token,
    statusku: state.shop.statusku,
    datalogin: state.shop.datalogin,
    cart2: state.shop.cart2,

});

export default connect(mapStateToProps)(Detailpesanan)