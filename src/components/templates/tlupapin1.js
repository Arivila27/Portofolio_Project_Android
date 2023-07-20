import React from 'react'; 

import {View} from 'react-native';
import { css } from '../../assets/css/cssku';
import Judulform from '../organisms/judulform';
import  Image  from '../atoms/image';
import { myColor } from '../../assets/color';
import Text from '../atoms/text';
import Tomboltext from '../atoms/tomboltext';
import Formlogin from '../organisms/formlogin';
import Subjudul from '../atoms/subjudul';
import Judul2 from '../atoms/judul1';
import Ket1 from '../atoms/ket1';
import { useNavigation } from '@react-navigation/native';
import Formlupapin1 from '../organisms/formlupapin1';

const Tlupapin1 = (props) => {
    const navigation = useNavigation();
    return (

    <View>
         <View style={css.marginContent}>
                <View style={css.marginjudul}>
                    <Judul2 text='Redi-POS'/>
                </View>
                <View style={css.marginsubjudullogin}>
                    <Subjudul text='Lupa Pin ?'/>
                </View>
                <View style={css.jaratketform}>
                    <Ket1 text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem vitae tristique sit egestas duis sit consequat maecenas.`}/> 
                </View>
            <Formlupapin1/>
        </View>

        

    </View>
   
    );
}
export default Tlupapin1

