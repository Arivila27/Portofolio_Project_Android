import React from 'react'; 

import {View, StatusBar} from 'react-native';
import { css } from '../../assets/css/cssku';
import Judulform from '../organisms/judulform';
import  Image  from '../atoms/image';
import { myColor } from '../../assets/color';
import { useNavigation } from '@react-navigation/native';

const Onboarding = (props) => {
    
    const navigation = useNavigation();

    return (
    <View  style={{flex:1}}>
        <StatusBar
            backgroundColor="transparent"
            translucent={true}
        />
        <View>
            <View style={css.imageonboarding}>
                <Image style={css.imageonboarding2} uri={require('../../assets/img/logo.png')} ></Image>
            </View>
        </View>
        <View>
            <Judulform />
        </View>
    </View>
   
    );
}
export default Onboarding

