import React from 'react'; 

import {View} from 'react-native';
import { css } from '../../assets/css/cssku';
import Judulform from '../organisms/judulform';
import  Image  from '../atoms/image';
import { myColor } from '../../assets/color';
import Text from '../atoms/text';

import Formlogin from '../organisms/formlogin';
import Subjudul from '../atoms/subjudul';
import Judul2 from '../atoms/judul1';
import Ket1 from '../atoms/ket1';
import Formregister from '../organisms/formregister';

const Tregister = (props) => {
    return (

    <View >
         <View>
            <Formregister/>    
        </View>
    </View>
   
    );
}
export default Tregister

