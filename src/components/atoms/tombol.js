import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Button from './button';


const Tombol = (props) => {
    return (
    <View>
        <Button style={props.style} text={props.text} stylefont={props.stylefont} onPress={props.onPress}/>
    </View>
    );
}
export default Tombol

