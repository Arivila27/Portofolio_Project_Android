import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Button from './button';
import { css } from '../../assets/css/cssku';


const Tombol1 = (props) => {
    return (
    <View  style={css.jaraktombol}>
        <Button style={css.tombol_full_2} stylefont={css.font_tombol_2} text={props.text} onPress={props.onPress}/>
    </View>
    );
}
export default Tombol1

