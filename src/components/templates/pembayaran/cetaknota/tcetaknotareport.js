import React, { useState ,useRef ,useEffect} from 'react'; 

import {View,TouchableOpacity,PixelRatio,FlatList,Dimensions,Image, ScrollView,ToastAndroid} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import Font14mediumhitam from '../../../atoms/font14mediumhitam';
import { BluetoothEscposPrinter } from 'react-native-bluetooth-escpos-printer';
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
import Listpesanan from '../../../organisms/penjualan/listpesanan';
import Font14mediumabuabu from '../../../atoms/font14mediumabuabu';
import Font12mediumorange from '../../../atoms/font14mediumorange';
import Listbill from '../../../organisms/penjualan/listbill';
import Listinformasitransaksi from '../../../organisms/penjualan/listinformasitransaksi';
import Listbold from '../../../organisms/penjualan/listbold';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { connect } from 'react-redux';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import Buttonbawahorange from '../../../atoms/buttonbawahorange';
import ViewShot,{ captureRef } from "react-native-view-shot";
import Escpos from "./escpos";
import numberFormat from '../../../../utils/numberFormat';
import axios from 'axios';
import { myApi } from '../../../../config/service/api';
const Tcetaknotareport = ({token,infoUser,totalBayar,uangditerima,pembayaran,uangkembali,cart,datalogin,...props}) => {
    const cobaref = useRef(null);
    const [data,setData] = useState(null)
    const [posisi,setPosisi] = useState('')
    const navigation = useNavigation();
    console.log("CORT ",datalogin)
    const route = useRoute();
    
    console.log("USE ROUTE T TUNAI", route.params.idku )

    useEffect(() => {
        const getData = async () => {
            axios.get(`${myApi.URL}/transjual/listTransById/${route.params.idku}`,{
                headers:{
                    'auth-token':token
                }
             })
             .then(response =>{
                // console.log('Fungtion')    
                console.log("RESPONSE API DETAIL LIST TRANSAKSI STATUS",response.data)
                setData(response.data)
            }).catch(error => {
                // console.log('Ini Eror 2',error)
                // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
        //   dispatch(updateDataMakanan(datamakanan))
        
        }
    setTimeout(() => {
      getData()
    }, )
  }, [])
  
  
  const toggleModal = (gambar) => {
    captureRef(gambar, {format: "jpg",opacity : 0.1,   result: "base64"}).then(async base64Data => {
        //let columnWidths = [8, 20, 20];
        try {
          await BluetoothEscposPrinter.printPic(base64Data, { width: 0 });
          setPosisi('')
        } catch (e) {
          alert(e.message || 'ERROR');
        }
    });
  };
    return (
    <View style={  posisi === 'absolute' ? css.menuContainerCetakAbsolute : css.menuContainerCetak} >     
        <ScrollView style={{ paddingTop:20,marginHorizontal:20,marginBottom:80}}>
        <ViewShot  ref={cobaref}>
            <View style={{backgroundColor:myColor.putih ,padding:20,borderRadius:10}}>
                
                    <View style={{alignItems:'center'}}>
                        <Image
                            resizeMode='contain'
                            style={{height:119, width:200,borderRadius:10}}
                            source={require('./../../../../assets/img/rio.jpg')}
                            />
                    </View>
                    <Garis/>
                    <View>
                    {
                        data === null ?
                        null:
                        <>
                        <Listinformasitransaksi keys="Pelanggan" value={data.transName} />
                        <Listinformasitransaksi keys="Waktu" value={data.transDate + " " + data.transTime} />
                        <Listinformasitransaksi keys="Kasir" value={data.transKasir} />
                        </>
                    }
                    </View>
                    <Garis/>
                    <View>
                    {
                        data === null ?
                        null:
                        data.transPesanan.map((convObj, i) => {
                            return <Listbill key={i} itemName={convObj.itemName} itemQty={convObj.itemQty} itemPrice={numberFormat(convObj.itemPrice * convObj.itemQty)}/>
                        })

                    }
                        {/* <Listbill itemName="Ayam Panggang Lamongan" itemQty="10" itemPrice="Rp 200.000"/>
                        <Listbill itemName="Soto Babi" itemQty="3" itemPrice="Rp 400.000"/> */}
                    </View>
                    <Garis/>
                    {
                        data === null ?
                        null:
                        <>
                    <Listinformasitransaksi keys="Sub Total" value={numberFormat(data.transTotalBayar)}/>
                    <Listinformasitransaksi keys="Tax 10%"value={numberFormat(data.transTotalPPN)} />
                    <Listinformasitransaksi keys="Total"value={numberFormat(data.transTotalBayar+ data.transTotalPPN)} />
                    <Garis/>
                     <Listinformasitransaksi keys="Diskon"value={numberFormat(data.transDiskon)} />
                    <Garis/>
                        </>
                    }
                   


                    {
                        data === null ?
                        null:
                        <>
                    <Listinformasitransaksi keys="Total" value={numberFormat(data.transTotalBayar + data.transTotalPPN - data.transDiskon)} />
                        </>
                    }

                    <Garis/>

                    {/* <Listinformasitransaksi keys="Pembayaran" value={pembayaran} />
                    <Listinformasitransaksi keys="Bayar" value={numberFormat(uangditerima)} />
                    <Listinformasitransaksi keys="Kembali" value={numberFormat(uangkembali - totalBayar.total * 10 /100 )} /> */}

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
            </ViewShot>
        </ScrollView>
        <Buttonbawahorange text="Print Nota"  onPress={ () => {
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
    token: state.shop.token,
});

export default connect(mapStateToProps)(Tcetaknotareport)

