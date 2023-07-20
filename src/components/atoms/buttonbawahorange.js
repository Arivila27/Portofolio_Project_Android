import React from 'react'; 

import {View,StyleSheet,TouchableOpacity} from 'react-native';
import { css } from '../../assets/css/cssku';
import Text from './text';
import Font14boldputih from './font14boldputih';
import { myColor } from '../../assets/color';

const Buttonbawahorange = (props) => {
    return (

        <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
            <TouchableOpacity onPress={props.onPress}
             style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Font14boldputih text={props.text}/>
            </TouchableOpacity>
        </View>

    );
}
export default Buttonbawahorange

