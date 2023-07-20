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
import Logo from '../atoms/logo';


const Tlogin = (props) => {
    const navigation = useNavigation();
    return (

    <View>
         <View style={css.marginContent}>
                <View style={css.marginjudul}>
                    <Logo/>
                </View>
                <View style={css.marginsubjudullogin}>
                    <Subjudul text='Login'/>
                </View>
                <View style={css.jaratketform}>
                    <Ket1 text={`Memulai perlu keberanian, membesarkan perlu ilmu\nItulah kuncinya dalam berbisnis. `}/> 
                </View>
            <Formlogin/>
        </View>

        

    </View>
   
    );
}
export default Tlogin

