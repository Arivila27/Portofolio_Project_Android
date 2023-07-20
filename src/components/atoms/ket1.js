import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';


const Ket1 = (props) => {
    return (

    <View>
       <Text style={css.font_ket}  text={props.text}/> 
    </View>

    );
}
export default Ket1

