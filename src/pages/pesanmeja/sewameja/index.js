import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
import Tdatameja from '../../../components/templates/pesanmeja/datameja/tdatameja';
import Tsewameja from '../../../components/templates/pesanmeja/sewameja/tsewameja';
const Sewameja = (props) => {
    const navigation = useNavigation();
    return (
    <View style={css.backgroundpageputihfull}>
        <Tsewameja/>
        {/* <Tambahdataicon/> */}
    </View>
   
    );
}
export default Sewameja

