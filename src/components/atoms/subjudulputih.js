import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';


const Subjudulputih = (props) => {
    return (

    <View>
      <Text style={css.font_sub_judul_1}  text={props.text}/> 
    </View>

    );
}
export default Subjudulputih

