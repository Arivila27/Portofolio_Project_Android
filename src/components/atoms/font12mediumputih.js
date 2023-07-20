import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from './text';


const Font12mediumputih = (props) => {
    return (

    <View>
       <Text style={css.font12mediumputih} text={props.text}></Text>
    </View>

    );
}
export default Font12mediumputih

