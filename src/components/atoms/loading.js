import React from 'react'; 

import {View,StyleSheet, Text, TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';
import { myColor } from '../../assets/color';



const Loading = (props) => {

    
    return (
        
        <View style={[{flex: 1 ,justifyContent:'center',alignItems:'center',zIndex:1},StyleSheet.absoluteFillObject]}>
            <View style={{backgroundColor:myColor.putih , width:100 , height:100, borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        </View>
   
    );
}
export default Loading

