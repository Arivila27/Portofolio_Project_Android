import React from 'react';
import { Text, View , Button } from 'react-native';



const text = (props) => {
    return (
      <Text style={props.style}>{props.text}</Text>
    );
}

export default text

