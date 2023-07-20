import React from 'react'; 
import { myColor } from '../../assets/color';
import {View} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';
import Tombol from '../atoms/tombol';
import Tombol1 from '../atoms/tombol1';
import Inputan from '../atoms/inputan';
import Tomboltext from '../atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';

const Formlupapin3 = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={css.jarakform}>
                <Inputan 
                    placeholder='PIN Baru' 
                    keyboardType='numeric'
                    secureTextEntry={true}/>
            </View>
            <View style={css.jarakform}>
                <Inputan 
                    placeholder='Konfirmasi PIN Baru' 
                    keyboardType='numeric'
                    secureTextEntry={true}/>
            </View>
            
                <Tombol1 text='UBAH & MASUK'  onPress={() => navigation.navigate('Login')}/>
        </View>
   
    );
}
export default Formlupapin3

