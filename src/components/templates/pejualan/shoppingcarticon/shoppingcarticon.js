import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import Font14mediumhitam from '../../../atoms/font14mediumhitam';
import Tidakadadata from '../../../atoms/404';
import Tambahdataicon from '../../../atoms/tambahdata';

const Tshoppingcart = (props) => {

    const navigation = useNavigation();
    return (
    <View style={{height:63,width:'100%',backgroundColor:myColor.warna1}}>
        
    </View>
   
    );
}
export default Tshoppingcart

