import React from 'react';
import { Text, View , Button, TouchableOpacity } from 'react-native';
import { myColor } from '../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';



const Tambahdataicon = (props) => {
    return (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 70, justifyContent: 'flex-end', alignItems: 'center'}}>
            <TouchableOpacity style={{width:74,height:74,backgroundColor:myColor.tombol1,borderRadius:100,justifyContent:'center',alignItems:'center'}}
                onPress={props.onPress}>
                <Icon name="plus" size={34} color={myColor.putih} />
            </TouchableOpacity>
        </View>
    );
}

export default Tambahdataicon

