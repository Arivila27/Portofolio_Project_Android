import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {  TouchableOpacity,Text,ToastAndroid } from 'react-native';
import { myApi } from '../config/service/api';


export const Axiosku =  {
    axiosget : async (urlnya) => {
        const [abcde,setAbcde ] = useState('') 
        console.log("URL NYA" , urlnya)
        await axios.get(`${myApi.URL}/${urlnya}`,{
        }).then(response =>{
            console.log('BISA')
            console.log('KUPON KU ' , response.data.length)
            setAbcde(response.data.length);
        }).catch(error => {
            console.log('Ini Eror',error)
            ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        return abcde;
    }
}


