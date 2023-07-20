import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from '../atoms/text';


const Font14mediumhitam = (props) => {
    return (

    <View>
       <Text style={css.font14mediumhitam} text={props.text}></Text>
    </View>

    );
}
export default Font14mediumhitam

