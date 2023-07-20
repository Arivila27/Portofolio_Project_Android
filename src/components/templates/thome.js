import React from 'react'; 

import {View,TouchableOpacity} from 'react-native';
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
import Subjudulputih from '../atoms/subjudulputih';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'

import Font12mediumhitam from '../atoms/font12medium';
import Font14bold from '../atoms/font14bold';
import Hasilpenjualan from '../organisms/home/hasilpenjualan';
import Font12regular from '../atoms/font12regular';
import Menu from '../organisms/home/menu';
import TopBarNavigator from '../organisms/home/TopTabNavigation';


const Thome = (props) => {

    const navigation = useNavigation();
    return (

      <View>
        
        <Hasilpenjualan/>
        
        <Menu/>

        {/* <TopBarNavigator/> */}

    </View>
   
    );
}
export default Thome

