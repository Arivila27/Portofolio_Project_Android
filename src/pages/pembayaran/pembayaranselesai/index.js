import React from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import Tpembayaran from '../../../components/templates/pembayaran/pembayaran/tpembayaran';
import Tpembayarantunai from '../../../components/templates/pembayaran/pembayarantunai/tpembayarantunai';
import Tpembayaranselesai from '../../../components/templates/pembayaran/pembayaranselesai/tpembayaranselesai';
import { connect } from 'react-redux';
const Pembayaranselesai = ({cart,infoMeja,infoUser, ...props}) => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log("CART PEMBAYARAN SELESAI", cart)
    console.log("INFOMEJA PEMBAYARAN SELESAI", infoMeja)
    console.log("INFOUSER PEMBAYARAN SELESAI", infoUser)


    return (
        
    <View style={{flex:1}}>        
       <Tpembayaranselesai transBayar={route.params.transBayar2}/>
    </View>
   
    );
}

const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
    products: state.shop.products,
    cart: state.shop.cart,
    infoMeja: state.shop.infoMeja,
    infoUser: state.shop.infoUser,

    

    
});

export default connect(mapStateToProps)(Pembayaranselesai)

