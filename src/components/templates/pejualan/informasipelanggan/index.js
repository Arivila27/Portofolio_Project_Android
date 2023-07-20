import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList,Dimensions, ToastAndroid} from 'react-native';
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
import { connect } from 'react-redux';
import Font12regularorange from '../../../atoms/font12regularorange';
import { useDispatch } from 'react-redux';
import { addStatus, addTable ,deleteTable,deleteUser} from '../../../../redux/shopping/shoppingaction';
import axios from 'axios';
import { myApi } from '../../../../config/service/api';
import moment from 'moment';

const Informasipelanggan = ({props,cart,infoMeja,infoUser,cart2,statusku}) => {

    const [idTrans, setIdtrans] = useState('');
    const tglku = moment(new Date()).format("DD-MM-YYYY")

    axios.get(`${myApi.URL}/transjual/listTransAllbyDatee/${tglku.toString()}`,{
    }).then(response =>{
        // console.log('BISA')
        // console.log('KUPON KU ' , response.data.length)
        setIdtrans(response.data.length + 1);
    }).catch(error => {
        console.log('APA INI',error)
        ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
    })

    const dispatch = useDispatch();
    const mejaNumber = infoMeja.mejaNumber
    const userku = infoUser.nama
    console.log("Pelanggankuuuuuu ", infoUser.nama)
    const navigation = useNavigation();
    return (
    <View style={{backgroundColor:myColor.putih,borderTopLeftRadius:10,borderTopRightRadius:10,width:'100%'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',height:63,alignItems:'center'}}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Pilihmeja')}}
            style={{alignItems:'center',width:'50%'}}>
                {
                    mejaNumber == null ?
                    <>
                    <Icon name="table" size={30} color={myColor.hitam} />
                    <Font12regular text="Meja"/>
                    </>
                :
                <>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Icon name="table" size={30} color={myColor.hitam} />
                        <Font12regularorange text={"Meja "+ mejaNumber}/>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        dispatch(deleteTable(null))
                    }}
                    style={{marginLeft:10}}>
                        <Icon name="close" size={20} color={myColor.merah} />
                    </TouchableOpacity>
                </View>
                </>

                }
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Pilihpelanggan')}}
            style={{alignItems:'center',width:'50%'}}>
                {
                    userku == null ?
                    <>
                    <Icon name="user" size={30} color={myColor.hitam} />
                    <Font12regular text="Pelanggan"/>
                    </>
                    :
                    <>
                    <View style={{flexDirection:'row'}}>
                        <View style={{alignItems:'center'}}>
                            <Icon name="user" size={30} color={myColor.hitam} />
                            <Font12regularorange text={userku}/>
                        </View>
                        <TouchableOpacity 
                        onPress={()=>{
                            dispatch(deleteUser(null))
                        }}
                        style={{marginLeft:10}}>
                            <Icon name="close" size={20} color={myColor.merah} />
                        </TouchableOpacity>

                    </View>
                    </>
                }
            </TouchableOpacity>
        </View>
        {/* ini Lihat Pesanan */}
        {
            cart.length > 0 ?
            <TouchableOpacity 
            style={{height:63,width:'100%',backgroundColor:myColor.warna1,flexDirection:'row',paddingHorizontal:10}}
            onPress={ ()  => {
                // dispatch(addStatus(!statusku))
                if(infoUser.nama == undefined){
                    ToastAndroid.show(`Nama Belum Di isi`,ToastAndroid.LONG)
                
                }else if(infoMeja.mejaNumber == undefined){
                    ToastAndroid.show(`Meja Belum Di isi`,ToastAndroid.LONG)
                    // console.log("PILIH MEJA")
                }else{

                    navigation.navigate('Detailpesanan')
                }
                }}>
                    {
                      cart2.length == 0 ?
                        <View style={{width:80,justifyContent:'center',alignItems:'center'}}>
                            <View style={{paddingBottom:5}}>
                                <Font12regularputih text="No Order"/>
                            </View>
                            <Font14boldputih text={idTrans}/>
                        </View>
                        :null
                    }
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:40,backgroundColor:myColor.putih}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                    <View style={{justifyContent:'center',marginLeft:8}}>
                        <Font14boldputih text="Lihat Pesanan"/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Icon name='chevron-right' size={20} color={myColor.putih}/>
                    </View>
                </View>
            
            </TouchableOpacity>
            :null
        }
    </View>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    cart2: state.shop.cart2,
    infoMeja: state.shop.infoMeja,
    infoUser: state.shop.infoUser,
    statusku: state.shop.statusku,

});

export default connect(mapStateToProps)(Informasipelanggan)

