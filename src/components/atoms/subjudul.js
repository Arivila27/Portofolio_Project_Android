import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';


const Subjudul = (props) => {
    return (

    <View>
      <Text style={css.font_sub_judul_2}  text={props.text}/> 
    </View>

    );
}
export default Subjudul

