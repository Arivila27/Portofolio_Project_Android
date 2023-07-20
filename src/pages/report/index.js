import React, { useState,useEffect ,useRef} from 'react'; 

import {View,TouchableOpacity,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColor } from '../../assets/color';
import { css } from '../../assets/css/cssku';
import Input from '../../components/atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../components/atoms/garis';
import Font12mediumhitam from '../../components/atoms/font12medium';
import Font14mediumhitam from '../../components/atoms/font14mediumhitam';
import Font14mediumorange from '../../components/atoms/font14mediumorange'
import Tidakadadata from '../../components/atoms/404';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Tambahdataicon from '../../components/atoms/tambahdata';
import Font14boldhitam from '../../components/atoms/font14boldhitam';
import axios from 'axios';
import Buttonbawahorange from '../../components/atoms/buttonbawahorange';
import ViewShot,{ captureRef } from "react-native-view-shot";
import { BluetoothEscposPrinter } from 'react-native-bluetooth-escpos-printer';
import { myApi } from '../../config/service/api';
import { connect, useDispatch } from 'react-redux';
import Listdatalaporan from '../../components/organisms/penjualan/listdatalaporan';
import numberFormat from '../../utils/numberFormat';
import Font24boldhitam from '../../components/atoms/font24boldhitam';
import Font16boldhitam from '../../components/atoms/font16boldhitam';
import ThermalPrinterModule from 'react-native-thermal-printer';
import { ScrollView } from 'react-native-gesture-handler';

const Reportpenjualan = ({token}) => {



    const cobaref = useRef(null);
    const [data ,setData] = useState('')
    const [nama ,setNamakasir] = useState('')
    const [jumlahtotal, setTotaltranfers] = useState(0);
    const [diskon, setDiskon] = useState(0);
    const [ppn , setPpn] = useState(0)


    const [coba, setCoba] = useState(0);
    const tanggal = moment().format("DD-MM-YYYY");
    const [posisi,setPosisi] = useState('')
    
    

    const array1 = [{}]

    const toggleModal = (gambar) => {
        captureRef(gambar, {format: "jpg",opacity : 0.1,   result: "base64"}).then(async base64Data => {
            //let columnWidths = [8, 20, 20];
            try {
                await ThermalPrinterModule.printTcp({
                 ip: '192.168.100.26',
                 port: 9100,
                 payload: base64Data,
                 printerWidthMM: 80,
                 timeout: 80000, // in milliseconds (version >= 2.2.0)
                 
               });
               console.log("MASUK SINI DULU")
             } catch (err) {
               //error handling
               console.log(err.message);
             }
            // try {
            //   await BluetoothEscposPrinter.printPic(base64Data, { width : 0 });
            //   setPosisi('')
            // } catch (e) {
            //   alert(e.message || 'ERROR');
            // }
        });
      };
    useEffect(() => {
        const getData = async () => {
            const idnya2 = await AsyncStorage.getItem('DATALOGIN')
            const idnya = JSON.stringify(idnya2)
            let jsonObject = JSON.parse(idnya)
            var myObj = JSON.parse(jsonObject)
            const namanya = myObj.userName;
            setNamakasir(namanya)
            axios.get(`${myApi.URL}/transjual/ListTotalTransbyDate/${tanggal}`)
             .then(response =>{
                setData(response.data)
                var jumlahbayar = 0
            }).catch(error => {
                // console.log('Ini Eror 2',error)
                // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
            axios.get(`${myApi.URL}/transjual/TotalTransbyDate/${tanggal}`)
             .then(response =>{
                setTotaltranfers(response.data.Total)  
                setDiskon(response.data.totDiskon)   
                setPpn(response.data.totalPPN)

            }).catch(error => {
              
            })
        //   dispatch(updateDataMakanan(datamakanan))
        }
  
    setTimeout(() => {
      getData()
    }, )
  }, [])
    return (
        
        <View style={{paddingHorizontal:10,paddingTop:25,flex:1,justifyContent:'space-between',backgroundColor:myColor.putih}}>
        <ScrollView style={{marginBottom:100}}>
        <ViewShot ref={cobaref}>
            <View style={{backgroundColor:myColor.putih ,justifyContent:'space-between'}}>
                <Font16boldhitam text={"Transaksi Hari ini(" + nama + ")" } />
                <Font24boldhitam text={numberFormat((jumlahtotal + ppn)-diskon)}/>
            </View>
            {
                data == '' ?
            null:
            data.map((item, index) => {
                return(
                    <Listdatalaporan id={item._id} total={item.transTotalBayar + item.transTotalPPN} diskonnya={item.transDiskon}   transDate={item.transDate}  transTime={item.transTime} transId={item.transId} transTable={item.transtable} transName={item.transName}/>
                )
            })
        }
            </ViewShot>

            </ScrollView>
        
        <Buttonbawahorange text="Print List Laporan" onPress={ () => {
            setPosisi("absolute");
            toggleModal(cobaref);
        }}/>
    </View>
   
    );
}
export default Reportpenjualan