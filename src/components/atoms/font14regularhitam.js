import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from './text';


const Font14regularhitam = (props) => {
    return (

    <View>
       <Text style={css.font14regularhitam} text={props.text}></Text>
    </View>

    );
}
export default Font14regularhitam

