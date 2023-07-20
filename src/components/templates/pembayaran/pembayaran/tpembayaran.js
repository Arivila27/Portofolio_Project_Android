import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList,Dimensions,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import Listpesanan from '../../../organisms/penjualan/listpesanan';
import Font14mediumabuabu from '../../../atoms/font14mediumabuabu';
import Font14mediumorange from '../../../atoms/font14mediumorange';
import Listbill from '../../../organisms/penjualan/listbill';
import Listinformasitransaksi from '../../../organisms/penjualan/listinformasitransaksi';
import Listbold from '../../../organisms/penjualan/listbold';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import Buttonbawahorange from '../../../atoms/buttonbawahorange';
import Font14regularhitam from '../../../atoms/font14regularhitam';
import Font24boldorange from '../../../atoms/font24boldorange';
import Font14boldhitam from '../../../atoms/font14boldhitam';
import { connect } from 'react-redux';
import numberFormat from '../../../../utils/numberFormat';
import Inputan from '../../../atoms/inputan';
import CurrencyInput from 'react-native-currency-input';
import { useDispatch } from 'react-redux';
import { addDiskon } from '../../../../redux/shopping/shoppingaction';
const Tpembayaran= ({totalBayar,cart ,...props}) => {

    const dispatch = useDispatch();
    const totalbayar = totalBayar.total
    const navigation = useNavigation();
    console.log('PROPS  ', props.idTrans)
    console.log('PROPS  ', props.namanya)
    console.log('PEMBAYARAN CART KU  ', cart)
    const [nominal , setNominal] = useState(0);
    dispatch(addDiskon(nominal))


    return (
    <View style={{flex:1}}>
        <View style={{marginHorizontal:20,padding:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                <Font14regularhitam text='No Order / Transaksi'/>
                <Font14mediumorange text={'#'+ props.idTrans}/>
            </View>

            <View style={{marginTop:14,backgroundColor:myColor.warnario1, opacity:0.5,height:100,width:'100%',borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                <Font14mediumhitam text="Total Tagihan"/>
                <View style={{marginTop:10}}>
                    <Font24boldorange text={numberFormat(totalbayar  - nominal)}/>
                </View>
            </View>

            <View style={{marginTop:20}}>

                <Font12mediumhitam text="Diskon / Potongan" />

                <CurrencyInput
                    value={nominal}
                    onChangeValue={setNominal}
                    prefix="Rp"
                    delimiter=","
                    separator="."
                    precision={0}
                    onChangeText={(formattedValue) => {

                        console.log(formattedValue); // $2,310.46
                    }}
                    style={{textAlign:'center', borderWidth:1,borderColor:myColor.inputan1,borderRadius:10}}
                    />

            </View>
            
            <Garis/>

            <View>
                <View style={{marginBottom:20}}>
                    <Font14regularhitam text="Pilih Pembayaran"/>
                </View>

                <TouchableOpacity
                 onPress={()=>{
                    navigation.navigate('Pembayarantunai',{idTrans:props.idTrans , nama:props.namanya, transBayar:props.transBayar})
                 }}
                 style={{paddingBottom:10, marginBottom:15, flexDirection:'row',borderBottomWidth:1,marginRight:5,borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                    <View>
                        <Font14regularhitam text="Tunai / Cash"/>
                        <Font12regular text=""/>
                    </View>
                    <View>
                        <Icon name='chevron-right' size={15} color={myColor.hitam}/>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{paddingBottom:10, marginBottom:15, flexDirection:'row',borderBottomWidth:1,marginRight:5,borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                    <View>
                        <Font14regularhitam text="EDC BCA"/>
                        <Font12regular text=""/>
                    </View>
                    <View>
                        <Icon name='chevron-right' size={15} color={myColor.hitam}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingBottom:10, marginBottom:15, flexDirection:'row',borderBottomWidth:1,marginRight:5,borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                    <View>
                        <Font14regularhitam text="Transfer Bank"/>
                        <Font12regular text=""/>
                    </View>
                    <View>
                        <Icon name='chevron-right' size={15} color={myColor.hitam}/>
                    </View>
                </TouchableOpacity> */}
                
            </View>

        </View>
    </View>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    totalBayar: state.shop.totalBayar,

});

export default connect(mapStateToProps)(Tpembayaran)

