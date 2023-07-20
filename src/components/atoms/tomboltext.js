import React from 'react';
import { Text, View , Button, TouchableOpacity } from 'react-native';



const Tomboltext = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={props.style}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Tomboltext

