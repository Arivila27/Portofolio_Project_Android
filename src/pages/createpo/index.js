import React, { useState,useEffect } from 'react'; 

import {View,StyleSheet, TouchableOpacity,Image} from 'react-native';
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
import Inputan from '../../components/atoms/inputan';

const Createpo = ({datalogin,...props}) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    


    useEffect(() => {
        const getData = async () => {
           
        }
  
    setTimeout(() => {
      getData()
      
    }, )
  }, [])

    return (
    
        <View style={{backgroundColor:myColor.putih , flex:1}}>
            <View style={{paddingHorizontal:15, marginTop:15}}>
                <Inputan placeholder="Nama Produk"/> 
            </View>
            <View style={{paddingHorizontal:15, marginTop:15}}>
                <Inputan placeholder="QTY"/> 
            </View>
            <View style={{paddingHorizontal:15, marginTop:15}}>
                <Inputan placeholder="Harga"/> 
            </View>
            <View style={{paddingHorizontal:15, marginTop:15}}>
                <Inputan placeholder="Unit"/> 
            </View>

        </View>            


    );
}



const mapStateToProps = (state) => ({
    datalogin: state.shop.datalogin,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Createpo)