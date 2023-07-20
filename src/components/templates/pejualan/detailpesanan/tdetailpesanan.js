import React, { useState,useEffect } from 'react'; 

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
import { useDispatch,useSelector } from 'react-redux'
import {tambahCounter , kurangCounter,updateDataMakanan, updateDataPesanan} from './../../../../redux/action' 
import { connect } from 'react-redux';
import { loadCurrentItem } from '../../../../redux/shopping/shoppingaction';

const Tdetailpesanan = ({props,cart,datalogin}) => {


    const dispatch = useDispatch();
    const navigation = useNavigation();

  

    console.log("CARTKU TEMPLATE DETAIL PESANAN",cart)
    return (
    <View>
        <View style={{paddingTop:20}}>
            {/* <View style={{marginHorizontal:32}}>
                <Font16boldhitam text="Makanan"/>
            </View> */}
            <FlatList
                style={{marginBottom:120}}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingBottom: 10}}
                numColumns='1'
                    data={cart}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) =>
                <View>
                        <Listpesanan itemCategory={item.itemCategory} itemKet={item.itemNoted}  image={item.itemImage} itemNama={item.itemName} itemHarga={item.itemPrice} itemQty={item.itemQty} subtotal={item.itemQty*item.itemPrice} 
                        onPress={()=> {
                            navigation.navigate('Ubahpesanan')
                            dispatch(loadCurrentItem(item)) 
                        }} />
                        
                </View>
                }
            />
        </View>
        
        
    </View>
   
    );
}



const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    datalogin: state.shop.datalogin,

});


export default connect(mapStateToProps)(Tdetailpesanan)

