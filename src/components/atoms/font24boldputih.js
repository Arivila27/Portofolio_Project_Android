import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font24boldputih = (props) => {
    return (

    <View>
       <Text style={css.font24boldputih} text={props.text}></Text>
    </View>

    );
}
export default Font24boldputih

