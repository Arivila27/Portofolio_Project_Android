import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';

const Judul2 = (props) => {
    return (

    <View>
      <Text style={css.font_judul_2}  text={props.text}/> 
    </View>

    );
}
export default Judul2

