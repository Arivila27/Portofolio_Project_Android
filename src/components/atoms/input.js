import React from 'react';
import {  TouchableOpacity,Text, TextInput } from 'react-native';
import text from './text' 

const input = (props) => {
    return (
        <TextInput style={props.style} 
                 placeholder={props.placeholder}
                 keyboardType={props.keyboardType}
                 secureTextEntry={props.secureTextEntry}
                 onChangeText={props.onChangeText}
                 value={props.value}
        ></TextInput>
    ); 
}

export default input

