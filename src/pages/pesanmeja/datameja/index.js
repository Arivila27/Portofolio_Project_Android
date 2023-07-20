import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
import Tdatameja from '../../../components/templates/pesanmeja/datameja/tdatameja';
const Datameja = (props) => {
    const navigation = useNavigation();
    return (
        
    <View style={css.backgroundpageputihfull}>
        <Tdatameja/>
        {/* <Tambahdataicon/> */}
    </View>
   
    );
}
export default Datameja

