import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Input from './input';
import { css } from '../../assets/css/cssku';


const Inputan = (props) => {
    return (
        <Input style={css.inputan_1} placeholder={props.placeholder} keyboardType={props.keyboardType} secureTextEntry={props.secureTextEntry} onChangeText={props.onChangeText}
        value={props.value}></Input>
    );
}
export default Inputan

