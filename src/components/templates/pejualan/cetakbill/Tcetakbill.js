import React, { useState,useRef } from 'react'; 

import {View,TouchableOpacity,ScrollView,FlatList,Dimensions,Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import Font14mediumhitam from '../../../atoms/font14mediumhitam';
import Tidakadadata from '../../../atoms/404';
import Tambahdataicon from '../../../atoms/tambahdata';
import Font12regular from '../../../atoms/font12regular';
import Font12regularputih from '../../../atoms/font12regularputih';
import Font12mediumputih from '../../../atoms/font12mediumputih';
import Font14boldputih from '../../../atoms/font14boldputih';
import Font14bold from '../../../atoms/font14bold';
import Font16boldhitam from '../../../atoms/font16boldhitam';
import Font16bregularhitam from '../../../atoms/font16regularhitam';
import Font16mediumhitam from '../../../atoms/font16mediumhitam';
import { BluetoothEscposPrinter } from 'react-native-bluetooth-escpos-printer';
import Listpesanan from '../../../organisms/penjualan/listpesanan';
import Font14mediumabuabu from '../../../atoms/font14mediumabuabu';
import Font12mediumorange from '../../../atoms/font14mediumorange';
import Listbill from '../../../organisms/penjualan/listbill';
import Listinformasitransaksi from '../../../organisms/penjualan/listinformasitransaksi';
import Listbold from '../../../organisms/penjualan/listbold';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ViewShot,{ captureRef } from "react-native-view-shot";
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import Buttonbawahorange from '../../../atoms/buttonbawahorange';
import { connect } from 'react-redux';
import numberFormat from '../../../../utils/numberFormat';

const Tcetakbill = ({infoUser,totalBayar,uangditerima,infoMeja,pembayaran,uangkembali,cart,datalogin,...props}) => {
    const cobaref = useRef(null);
    const route = useRoute();
    console.log("TANGKAP ", route.params)
    const navigation = useNavigation();
    const [posisi,setPosisi] = useState('')
    const toggleModal = (gambar) => {
        captureRef(gambar, {format: "jpg",opacity : 0.1,   result: "base64"}).then(async base64Data => {
            //let columnWidths = [8, 20, 20];
            try {
              await BluetoothEscposPrinter.printPic(base64Data, { width : 0 });
              setPosisi('')
            } catch (e) {
              alert(e.message || 'ERROR');
            }
        });
      };

    console.log("CART TCETAKBILL ", cart)

    return (
    
    <View style={ posisi === 'absolute' ? css.menuContainerCetakAbsolute : css.menuContainerCetak}>
         <ScrollView style={{paddingTop:20,marginHorizontal:20,marginBottom:80}}>
        <ViewShot ref={cobaref}>
            <View style={{backgroundColor:myColor.putih ,padding:20,borderRadius:10}}>
                <View>
                    <View style={{alignItems:'center'}}>
                        <Image
                            resizeMode='contain'
                            style={{height:119, width:200,borderRadius:10}}
                            source={require('./../../../../assets/img/rio.jpg')}
                            />
                    </View>
                    <Garis/>
                    <View>
                        <Listinformasitransaksi keys="No Meja / kode" value={infoMeja.mejaNumber}  />
                        <Listinformasitransaksi keys="Pelanggan" value={infoUser.nama}  />
                        {/* <Listinformasitransaksi keys="Waktu" value="21-09-2022 23:58:57" /> */}
                        <Listinformasitransaksi keys="Kasir" value={datalogin.userName} />
                    </View>
                    <Garis/>
                    <View>
                    {cart.map((convObj, i) => {
                            return <Listbill key={i} itemCategory={convObj.itemNoted} itemName={convObj.itemName} itemQty={convObj.itemQty} itemPrice={numberFormat(convObj.itemPrice * convObj.itemQty)}/>
                        })}
                    </View>
                    <Garis/>
                    <Listinformasitransaksi keys="Total" value={numberFormat(totalBayar.total)} />
                    <Listinformasitransaksi keys="Tax 10%" value={numberFormat(route.params.transPpn)}/>
                    <Listbold keys="Total" value={numberFormat(totalBayar.total + route.params.transPpn)}/>
                    {/* Sosmed */}
                    <View style={{alignItems:'center',marginTop:18}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <Icon name="instagram" size={20} color={myColor.hitam}/>
                            <View style={{marginLeft:10}}>
                                <Font14mediumhitam text="@riobilliard_bistro"/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                             <FontAwesomeIcon icon={faTiktok} size={18}/>
                            <View style={{marginLeft:10}}>
                                <Font14mediumhitam text="@riobilliardnbistro"/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            
                            <View style={{marginLeft:10}}>
                                <Font14mediumhitam text="RSVP - > +62 813-3838-2881"/>
                            </View>
                        </View>
                    </View>
            </View>
        </View>
        </ViewShot>
        </ScrollView>
        <Buttonbawahorange text="Print Bill" onPress={ () => {
            setPosisi("absolute");
            toggleModal(cobaref);
          }}/>
    </View>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    totalBayar: state.shop.totalBayar,
    uangditerima: state.shop.uangditerima,
    pembayaran: state.shop.pembayaran,
    uangkembali : state.shop.uangkembali,
    datalogin: state.shop.datalogin,
    infoUser: state.shop.infoUser,
    infoMeja: state.shop.infoMeja,

});

export default connect(mapStateToProps)(Tcetakbill)

