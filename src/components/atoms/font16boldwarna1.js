import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font16boldwarna1 = (props) => {
    return (

    <View>
       <Text style={css.font16boldwarna1} text={props.text}></Text>
    </View>

    );
}
export default Font16boldwarna1

