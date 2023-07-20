import React from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../atoms/text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars,faUser } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { myColor } from '../../../assets/color';
import Font12mediumhitam from '../../atoms/font12medium';
import { css } from '../../../assets/css/cssku';
import Ket1 from '../../atoms/ket1';
import Font14bold from '../../atoms/font14bold';
import Subjudulputih from '../../atoms/subjudulputih';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { navigationPush } from '../../../utils/navigationMethods';

const Namatoko = (props) => {

    const navigation = useNavigation();
    return (

        <View style={{flexDirection:'row',marginTop:20}}>
            {/* <FontAwesomeIcon icon={faBars} color={myColor.putih} size={24} /> */}
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Subjudulputih text='Hello Rio Billiard And Bistro' />
            </View>
            <TouchableOpacity
            style={{zIndex:100}}
            onPress={()=>{
                navigationPush('Profile')
            }}>
                <Icon name='user-circle-o' size={30} color={myColor.putih} />
            </TouchableOpacity>
        </View>

    );
}
export default Namatoko

