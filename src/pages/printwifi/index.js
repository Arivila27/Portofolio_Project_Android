import React, { useState,useEffect } from 'react'; 

import {View,StyleSheet, TouchableOpacity,Image,TextInput,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../config/context'

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Thome from '../../components/templates/thome';
import Font14mediumhitam from '../../components/atoms/font14mediumhitam';
import Font14boldputih from '../../components/atoms/font14boldputih';
import { myColor } from '../../assets/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect, useDispatch } from 'react-redux';
import Font24boldputih from '../../components/atoms/font24boldputih';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font14boldhitam from '../../components/atoms/font14boldhitam';
import { addDataLogin } from '../../redux/shopping/shoppingaction';
import ThermalPrinterModule from 'react-native-thermal-printer';
import axios from 'axios';
import { myApi } from '../../config/service/api';





const Printwifi = ({datalogin,...props}) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const [nama,setNama] = useState('');
    const [email,setEmail] = useState('');

    const [state, setState] = useState({
        text:
        //   '[C]<img>https://via.placeholder.com/300.jpg</img>\n' +
        //   '[L]\n' +
          "[C]<u><font size='big'>Rio Billiard And Bistro</font></u>\n" +
          '[L]\n' +
          '[C]========================================\n' +
          `[L]Pelanggan [R] Dicky \n`+
          `[L]Waktu [R] 23-10-2022 01:11 \n`+
          `[L]Kasir [R] Dila \n` +
          `[L]No Meja [R] 04 \n` +
          '[C]----------------------------------------\n' +
          `[L]<b>Meja 1 </b>  [R]x 2 \n` +
          '[L]\n' +
          `[L]<b>Rice Bowl Beef Teriyaki </b> [R]x 2\n` +
          '[L]\n' +
          '[C]----------------------------------------\n' +
        
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'+
          '[L]\n'

        //   "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
        //   "[C]<qrcode size='20'>http://www.developpeur-web.dantsu.com/</qrcode>",
      });

      const onPress = async () => {
        try {
            await ThermalPrinterModule.printTcp({
             ip: '192.168.100.26',
             port: 9100,
             payload: state.text,
             printerWidthMM: 80,
             timeout: 80000, // in milliseconds (version >= 2.2.0)
             
           });
           console.log("MASUK SINI DULU")
         } catch (err) {
           //error handling
           console.log(err.message);
         }
      };

   

    useEffect(() => {
        const getData = async () => {
            const idnya2 = await AsyncStorage.getItem('DATALOGIN')
            const idnya = JSON.stringify(idnya2)
            let jsonObject = JSON.parse(idnya)
            var myObj = JSON.parse(jsonObject)
            setNama(myObj.userName)
            setEmail(myObj.userEmail)

            axios.get(`${myApi.URL}/items/listItemAll`,{
                headers:{
                    'auth-token':myObj.userToken
                }
             })
             .then(response =>{

            }).catch(error => {

            })
        }
  
    setTimeout(() => {
      getData()
      
    }, )
  }, [])

    return (
    
        <View style={{backgroundColor:myColor.abuabu , flex:1}}>

            <Button
                title="Click to invoke your native module!"
                color="#841584"
                onPress={onPress}
      />

            <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
                <TouchableOpacity 
                    onPress={()=>{
                        
                        }} 
                    style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Font14boldputih text="Log Out"/>
                </TouchableOpacity>
            </View>            

        </View>

    );
}



const mapStateToProps = (state) => ({
    datalogin: state.shop.datalogin,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Printwifi)