import React ,{useState,useRef,useEffect}from 'react';
import {View,  TouchableOpacity,Text } from 'react-native';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
import { axios } from 'axios';
import { myApi } from '../config/service/api';


export default axiosPost = ({url,token,object})=> {

    console.log("URL nya",url)
    console.log("TOKEN nya",token)
    console.log("Object nya",object)
    axios.post(`${myApi.URL}/${url}}`,{object},{
        headers:{
            'auth-token':token
        }
    }).then(response =>{
        return('berhasil')
        console.log('BISA')
        console.log("RESPON API PAK AVIV",response.data)
       
    }).catch(error => {
        return('gagal')
        console.log('Ini Eror',error)
    })


}


