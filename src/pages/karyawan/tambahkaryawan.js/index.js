import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
import Ttambahkaryawan from '../../../components/templates/karyawan/tambahkaryawan/ttambahkaryawan';
const Tambahkaryawan = (props) => {
    const navigation = useNavigation();
    return (
        
    <View style={css.backgroundpageputihfull}>
        <Ttambahkaryawan/>
    </View>
   
    );
}
export default Tambahkaryawan

