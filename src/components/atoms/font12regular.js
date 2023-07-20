import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from './text';


const Font12regular = (props) => {
    return (

    <View>
       <Text style={css.font12regular} text={props.text}></Text>
    </View>

    );
}
export default Font12regular

