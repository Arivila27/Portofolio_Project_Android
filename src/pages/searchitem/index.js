import React from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
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
import { connect } from 'react-redux';


const Searchitem = (props) => {
    const navigation = useNavigation();

    
    return (

    <></>

   
    );
}

const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
    products: state.shop.products,
});

export default connect(mapStateToProps)(Searchitem)

