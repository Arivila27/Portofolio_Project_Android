import React from 'react'; 
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import Tanggalsekarang from '../../molecules/home/tanggalsekarang';
import Nominalpenjualan from '../../molecules/home/nominalpenjualan';
import Namatoko from '../../molecules/home/namatoko';
import { myColor } from '../../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12mediumhitam from '../../atoms/font12medium';
import Font14mediumorange from '../../atoms/font14mediumorange';
import Font14boldputih from '../../atoms/font14boldputih';
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,updateProducts ,updateProductsMin ,updateCartmin, removeFromCart} from '../../../redux/shopping/shoppingaction';
import Font24boldputih from '../../atoms/font24boldputih';
import numberFormat from '../../../utils/numberFormat';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

const Productsku = (props) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // console.log("CARTKU 1 PRODUCTSku ", props.cart)
    // console.log("JANGKREK KON", props.qty)

    return (
        <TouchableOpacity style={css.menuContainermakanan2} 
        onPress={()=> {
            dispatch(addToCart(props.id))
            dispatch(updateProducts(props.id))
        }}>
             {
                props.qty == NaN || props.qty == undefined || props.qty == 0 ?
                null
                :
                <View style={{ zIndex:20,position:'absolute',justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row',alignSelf:'center',height:'80%'}}>
                    <View style={{marginRight:10, width:60,height:60,backgroundColor:myColor.warna1, justifyContent:'center',alignItems:'center', borderRadius:100}}>
                        <Font24boldputih text={props.qty} />
                    </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        dispatch(updateProductsMin(props.id,props.qty))
                        if(props.qty === 1 ){
                            dispatch(removeFromCart(props.id))
                        }else{
                            dispatch(updateCartmin(props.id,props.qty))
                        }
                    }}
                    style={{ width:60,height:60,backgroundColor:myColor.merah, justifyContent:'center',alignItems:'center', borderRadius:100}}>
                        <Font24boldputih text="-"/>
                    </TouchableOpacity>
                </View>
                }
            <View style={{alignItems:'center'}}>
                <Image
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    style={{height:93, width:136,borderRadius:10}}
                    source={{uri:props.image}}
                    />
            </View>
            <View style={{marginTop:13}}>
                <Font12mediumhitam text={props.title} />
            </View>
            <View style={{marginTop:0}}>
                <Font12mediumhitam text={numberFormat(props.price)} />
            </View>
            <View style={{alignItems:'center'}}>
                {/* <TouchableOpacity 
                onPress={()=> {
                    dispatch(addToCart(props.id))
                    dispatch(updateProducts(props.id))
                
                }}
                // onPress={()=> dispatch(tambahCounter(counter))}
                style={{height:30,width:'100%', borderWidth:1,borderColor:myColor.warnario1,borderRadius:10,marginTop:16,alignItems:'center',justifyContent:'center'}}>
                    <Font14mediumorange text="Tambah"/>
                </TouchableOpacity> */}
            </View>
        </TouchableOpacity>  
   
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
});


export default connect(mapStateToProps)(Productsku)


