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

const Formlupapin1 = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={css.jarakform}>
                <Inputan 
                    placeholder='Nomor Hp' 
                    keyboardType='phone-pad'
                    secureTextEntry={false}/>
            </View>
            
                <Tombol1 text='KIRIM'  onPress={() => navigation.navigate('Lupapin2')}/>
        </View>
   
    );
}
export default Formlupapin1

