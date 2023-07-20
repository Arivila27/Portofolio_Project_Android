import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font24boldorange = (props) => {
    return (

    <View>
       <Text style={css.font24boldrange} text={props.text}></Text>
    </View>

    );
}
export default Font24boldorange

