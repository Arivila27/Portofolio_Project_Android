import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font14bold = (props) => {
    return (

    <View>
       <Text style={css.font14boldwarna1} text={props.text}></Text>
    </View>

    );
}
export default Font14bold

