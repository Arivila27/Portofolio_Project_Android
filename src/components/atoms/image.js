import React from 'react';
import {Image} from 'react-native';

const image = (props) => {
    return (
      <Image source={props.uri} style={props.style}></Image>
    );
}

export default image

