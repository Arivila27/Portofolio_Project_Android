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

const Formlupapin2 = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={css.jarakform}>
                <Inputan 
                    placeholder='Kode' 
                    keyboardType='numeric'
                    secureTextEntry={false}/>
            </View>
            
                <Tombol1 text='Konfirmasi'  onPress={() => navigation.navigate('Lupapin3')}/>
        </View>
   
    );
}
export default Formlupapin2

