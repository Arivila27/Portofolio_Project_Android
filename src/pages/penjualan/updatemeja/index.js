import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { css } from '../../../assets/css/cssku';
import Tdatakaryawan from '../../../components/templates/karyawan/datakaryawan/tdatakaryawan';
import Tambahdataicon from '../../../components/atoms/tambahdata';
import Tdatameja from '../../../components/templates/pesanmeja/datameja/tdatameja';
import TabViewExample from '../../../components/templates/pejualan/menupenjualan/tmenupenjualan';
import Informasipelanggan from '../../../components/templates/pejualan/informasipelanggan';
import Tlihatpesanan from '../../../components/templates/pejualan/lihatpesanan/tlihatpesanan';
import { myColor } from '../../../assets/color';
import Tpilihmeja from '../../../components/templates/pejualan/pilihmeja/tpilihmeja';
import Tupdatemeja from '../../../components/templates/pejualan/updatemeja/tupdatemeja';

const Updatemeja = (props) => {
    const navigation = useNavigation();

    return (
    <View  style={css.backgroundpageputih}>        
        <Tupdatemeja/>
    </View>
   
    );
}
export default Updatemeja

