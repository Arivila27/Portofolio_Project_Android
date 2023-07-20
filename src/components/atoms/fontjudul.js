import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../atoms/text';


const Fontjudul = (props) => {
    return (

    <View>
       <Text style={props.style} text={props.text}></Text>
    </View>

    );
}
export default Fontjudul

