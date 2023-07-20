import React from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
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
import Tdetailpesanan from '../../../components/templates/pejualan/detailpesanan/tdetailpesanan';
import Font12regular from '../../../components/atoms/font12regular';
import Font14regularhitam from '../../../components/atoms/font14regularhitam';
import Font14bold from '../../../components/atoms/font14bold';
import Font14boldhitam from '../../../components/atoms/font14boldhitam';
import Font16boldwarna1 from '../../../components/atoms/font16boldwarna1';
import Font14mediumhitam from '../../../components/atoms/font14mediumhitam';
import Tdetaillisttransaksi from '../../../components/templates/pejualan/detaillisttransaksi/tdetaillisttransaksi';
import Font14boldputih from '../../../components/atoms/font14boldputih';
import Tcetakbill from '../../../components/templates/pejualan/cetakbill/Tcetakbill';

const Cetakbill = (props) => {
    const navigation = useNavigation();

    return (
        
    <View style={{flex:1}}>        
       <Tcetakbill/>
    </View>
   
    );
}
export default Cetakbill

