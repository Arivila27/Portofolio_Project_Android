import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
const Datakaryawan = (props) => {
    const navigation = useNavigation();
    return (
        
    <View style={css.backgroundpageputihfull}>
        <Tdatakaryawan/>
        <Tambahdataicon/>
    </View>
   
    );
}
export default Datakaryawan

