import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font16mediumhitam = (props) => {
    return (

    <View>
       <Text style={css.font16mediumhitam} text={props.text}></Text>
    </View>

    );
}
export default Font16mediumhitam

