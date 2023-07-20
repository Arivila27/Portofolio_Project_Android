import React from 'react';
import {  TouchableOpacity,Text } from 'react-native';
import text from './text' 

const button = (props) => {
    return (
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        <Text style={props.stylefont}>{props.text}</Text>
      </TouchableOpacity>
    ); 
}

export default button

