import React from 'react';
import {View,  TouchableOpacity,Text } from 'react-native';
import Font12mediumhitam from './font12medium';
import text from './text' 

const Tidakadadata = (props) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
            <Font12mediumhitam text={props.text}/>
      </View>
    ); 
}

export default Tidakadadata

