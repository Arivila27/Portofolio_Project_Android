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
import Tubahpesanan from '../../../components/templates/pejualan/ubahpesanan';
import Font12mediumputih from '../../../components/atoms/font12mediumputih';
import Font14boldputih from '../../../components/atoms/font14boldputih';
import { connect } from 'react-redux';
const Ubahpesanan = ({current,props}) => {
    const navigation = useNavigation();
    console.log("CURRENT ,", current)
    return (
        <Tubahpesanan/>
       
   
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    current: state.shop.currentItem,
});

export default connect(mapStateToProps)(Ubahpesanan)

