import React, { useState ,useEffect} from 'react'; 

import {View,TouchableOpacity,FlatList,ToastAndroid,Modal,Dimensions,Image, Text,StyleSheet,Alert, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { connect } from 'react-redux';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import moment from 'moment';
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
import { myApi } from '../../../../config/service/api';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import Font14mediumabuabu from '../../../atoms/font14mediumabuabu';
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,updateProducts ,adjustItemPrice,updateProductsMin ,updateCartmin, removeFromCart,addCartandQty,addpriceType, updateProductstable} from '../../../../redux/shopping/shoppingaction' ;
import Font12mediumorange from '../../../atoms/font14mediumorange';
import numberFormat from '../../../../utils/numberFormat';
import axios from 'axios';

const Tdetaillisttransaksi = ({cart,...props}) => {
    const [modalVisible, setModalVisible2] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState('');
    const [id2, setId2] = useState('');
    const [label2, setLabel2] = useState('');
    const [siang, setSiang] = useState(0);
    const [malam, setMalam] = useState(0);
    const [itemsku2, setItemsku2] = useState([]);
    // var itemsku2 = []
    const [value, setValue] = useState(null);
    const [idTransaksi, setIdTransaksi] = useState(null);
    const dispatch = useDispatch();
    const [jumlah,setJumlah] = useState(0)
    const [data,setDataMeja] = useState([])
    const [apaya,setApaya] = useState([])
    const [isModalVisible, setModalVisible] = useState(true)
    const [jumlah2,setJumlah2] = useState(0)

    useEffect(() => { 
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
            .then(response=>{
            setSiang(response.data[0].itemPrice)
            setMalam(response.data[1].itemPrice)
            if(isDayTime===true){
                setJumlah2(response.data[0].itemPrice)
            }else{
                setJumlah2(response.data[1].itemPrice)
            }
            }).catch(error => {
            setIsLoading(false)
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        
        
        axios.get(`${myApi.URL}/items/listmejaByStatusTrue`,)
        .then(response =>{
        
        setDataMeja(response.data)
        // console.log('WOIIIIIIIIIIII',response.data)
        var itemnya = [];
            response.data.map((obj)=> {
                itemnya.push({label:obj.itemName , id:obj._id, value:obj._id})
                console.log("HMMM",obj.itemCode)
            })
            console.log("ITEM NYA",itemnya)
        setItemsku2(itemnya)
        }).catch(error => {
            console.log('Ini Eror 2',error)
            ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
    },[]);
    // if(props.waktu === undefined || props.waktu === null){
    //     setHalo(props.waktu)
    // }else{
    //     setHalo(props.waktu.split(" "))
    // }
    var arrayPesanan = props.pesanan
    
    const togglePindah = () => {
       // console.log("DETAIL PESANANnn" , arrayPesanan)
        // var objek = {
        //                 "transPesanan.$.itemCode": itemsku2.value,
        //                 "transPesanan.$.itemName": itemsku2.label
        //             }
        // for (let index = 0; index < arrayPesanan.length; index++) {
        //     if (arrayPesanan[index].itemNoted==='1' || arrayPesanan[index].itemNoted==='open') {
        //         objek = {
        //             "transPesanan.$.itemCode": arrayPesanan[index].itemCode,
        //             "transPesanan.$.itemName": arrayPesanan[index].itemName,
        //             "transPesanan.$.itemNoted": arrayPesanan[index].itemNoted
        //         }
        //     } 
        // }
        
    console.log("YG MAU MASUK DATABASE,", value2)
    console.log("YG MAU MASUK DATABASE,", label2)
    console.log("YG MAU MASUK DATABASE,", id2)



        axios.post(`${myApi.URL}/transjual/movingMejaBilyard/${idTransaksi}/${value2}`)
            .then(response =>{
                console.log("Respon Nya Respon Nya",response.data)
            
        }).catch(error => {
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        // setModalVisible(!isModalVisible);
        // axios.get(`${myApi.URL}/items/listmejaByStatusTrue`,)
        //     .then(response =>{
            
        //     setDataMeja(response.data)
        //     // console.log('WOIIIIIIIIIIII',response.data)
        //     response.data.map((obj)=> {
        //         itemsku2.push({labell:obj.itemName , value:obj.itemCode})
        //         console.log("HMMM",obj.itemCode)
        //     })
        //     console.log("BROOO ",itemsku2)
        // }).catch(error => {
        //     console.log('Ini Eror 2',error)
        //     ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        // })
       
    }
    // }
    const toggleModall  = (id) => {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        var today2 = new Date() ;
        var last2 = props.transCreated 
        var last42 = new Date(props.transCreated).getHours()
        console.log("JANGAN PILIH KASIH",last42 )
        const isDayTime2 = last42 > 6 && last42 < 18
        var momentsatu2 = moment(today2).format();
        var momentdua2 = moment(last2).format();
        var duration2 = moment.duration(moment(momentsatu2).diff(momentdua2));
        var duration3 = moment.duration(moment(d).diff(momentdua2));
        // console.log("HAI COKCOK",d)
        var hours2 = duration2.asMinutes();
        var hours3 = duration3.asMinutes();
        //console.log("HAI COK",hours3)
        var coba2 = Math.floor(hours2)
        var time = parseInt(coba2)
        if(isDayTime===false){
            //malam
            if (time<60) {
                //const jumlahfinal = malam 
                setJumlah(malam)
                dispatch(adjustItemPrice(id,1,malam))
            } else {
                if (isDayTime2===true) {
                    //kondisi ketika pergantian jam (kenapa tak masukan di malam, karena kalau main kurang dari satu jam harga ikut malan)
                    var d = new Date(props.transCreated);
                    var lemah = d.setHours(18,0);
                    var kuat = d.setHours(18,0);
                    var e = new Date();
                    var las2 = props.transCreated
                    var momentsat2 = moment(lemah).format();
                    var momentsat3 = moment(kuat).format();
                    var momentdu2 = moment(las2).format();
                    var momentdua3 = moment(e).format();
                    var duratio2 = moment.duration(moment(momentsat2).diff(momentdu2));
                    var duratio3 = moment.duration(moment(momentdua3).diff(momentsat3));
                    var hour2 = duratio2.asMinutes();
                    var cob2 = Math.floor(hour2)
                    var tim = parseInt(cob2)
                    var hour3 = duratio3.asMinutes();
                    var cob3 = Math.floor(hour3)
                    var tim3 = parseInt(cob3)
                    var inijumlahdua = tim * (siang / 60)
                    var inijumlahtiga = tim3 * (malam / 60)
                    var hasiljumlah1 = Math.round(inijumlahdua)
                    var hasiljumlah2 = Math.round(inijumlahtiga)
                    var inijumlahfinal = hasiljumlah1 + hasiljumlah2;
                    var timfinal = Math.floor(inijumlahfinal)
                    setJumlah(parseInt(timfinal))
                    dispatch(adjustItemPrice(id,1,parseInt(timfinal)))
                }else{
                    const inijumlah = time * (malam / 60)
                    const jumlahfinal = Math.floor(inijumlah)
                    setJumlah(parseInt(jumlahfinal))
                    dispatch(adjustItemPrice(id,1,parseInt(jumlahfinal)))
                }
            }
        }else{
            //siang
            if (time<60) {
                const jumlahfinal = siang 
                setJumlah(siang)
                dispatch(adjustItemPrice(id,1,siang))

            } else {
                const inijumlah = time * (siang / 60)
                const jumlahfinal = Math.floor(inijumlah)
                setJumlah(parseInt(jumlahfinal))
                dispatch(adjustItemPrice(id,1,parseInt(jumlahfinal)))
            }
        }

      };
    const hellotime = moment(props.transCreated).format("HH:mm");
    const hellotimedua = moment(new Date()).format("HH:mm");
    
    const navigation = useNavigation();
    return (
    <>
    <View>
    
        <View style={{paddingTop:20,marginHorizontal:32}}>
            <View style={{marginBottom:10}}>
                <Font14mediumabuabu text="Informasi Transaksi"/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Font14mediumhitam text='Meja'/>
                        <Font14mediumhitam text='Kasir'/>
                    </View>
                    <View style={{marginHorizontal:10}}>
                        <Font14mediumhitam text=':'/>
                        <Font14mediumhitam text=':'/>
                    </View>
                    <View>
                        <Font14mediumhitam text={props.meja}/>
                        <Font14mediumhitam text={props.kasir}/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Font14mediumhitam text='Waktu'/>
                        <Font14mediumhitam text='Pelanggan'/>
                    </View>
                    <View style={{marginHorizontal:10}}>
                        <Font14mediumhitam text=':'/>
                        <Font14mediumhitam text=':'/>
                    </View>
                    <View>
                        <Font14mediumhitam text={props.tgl}/>
                        <Font14mediumhitam text={props.pelanggan}/>
                    </View>
                </View>
            </View>
            <View style={{marginVertical:20}}>
                <View style={{height:1,width:"100%",backgroundColor:myColor.abuabu}}/>
            </View>
            <View>
                <Font14mediumabuabu text="Informasi Pesanan"/>
            </View>

            <FlatList
                style={{marginBottom:420}}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingBottom: 10}}
                numColumns='1'
                    data={arrayPesanan}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) =>
                    <View>
                        { item.itemNoted === "open" ?
                        <View>
                        <View style={{flexDirection:'row',borderBottomWidth:1,marginRight:5,paddingVertical:16, borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                            <View>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flex:1}}>
                                        <Font14mediumhitam text={item.itemName}/>
                                        <Font12mediumorange text={item.itemNoted}/>
                                    </View>
                                    {/* <TouchableOpacity style={{borderRadius:6, width:40,height:25,backgroundColor:myColor.warna1}}>
                                        <Text>Hello</Text>
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Font14mediumabuabu text={hellotime + "-" + hellotimedua}/>
                                </View>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                    <TouchableOpacity onPress={()=> { toggleModall(item._id)}} style={{borderRadius:6, height:25,backgroundColor:myColor.warna1 , marginBottom:10,justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>
                                        <Text>Hitung</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Font16mediumhitam text={numberFormat(jumlah)}/>
                                    </View>
                            </View>
                        </View>
                        {/* <TouchableOpacity onPress={()=> {
                            console.log("COK" ,cart)
                                // setModalVisible2(true)
                                // setIdTransaksi(props.id)
                                }} style={{flex:1,backgroundColor:myColor.tombol1}}>
                            <Text>Pindah</Text>
                        </TouchableOpacity> */}
                        </View>
                        : item.itemNoted === "1" ?
                        <View style={{flexDirection:'row',borderBottomWidth:1,marginRight:5,paddingVertical:16, borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                            <View>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flex:1}}>
                                        <Font14mediumhitam text={item.itemName}/>
                                        <Font12mediumorange text="per jam"/>
                                    </View>
                                    {/* <TouchableOpacity style={{borderRadius:6, width:40,height:25,backgroundColor:myColor.warna1}}>
                                        <Text>Hello</Text>
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Font14mediumabuabu text={numberFormat(jumlah2)}/>
                                    <View style={{flexDirection:'row',marginLeft:20}}>
                                        <Font14mediumabuabu text={item.itemQty}/>
                                        <Font14mediumabuabu text="x"/>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                    <View>
                                        <Font16mediumhitam text={numberFormat(item.itemQty * jumlah2)}/>
                                    </View>
                            </View>
                        </View>
                        :
                        <View style={{flexDirection:'row',borderBottomWidth:1,marginRight:5,paddingVertical:16, borderColor: myColor.abuabu,justifyContent:'space-between'}}>
                            <View>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flex:1}}>
                                        <Font14mediumhitam text={item.itemName}/>
                                        <Font12mediumorange text={item.itemNoted}/>
                                    </View>
                                    {/* <TouchableOpacity style={{borderRadius:6, width:40,height:25,backgroundColor:myColor.warna1}}>
                                        <Text>Hello</Text>
                                    </TouchableOpacity> */}
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Font14mediumabuabu text={numberFormat(item.itemPrice)}/>
                                    <View style={{flexDirection:'row',marginLeft:20}}>
                                        <Font14mediumabuabu text={item.itemQty}/>
                                        <Font14mediumabuabu text="x"/>
                                    </View>
                                </View>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                    <View>
                                        <Font16mediumhitam text={numberFormat(item.itemQty * item.itemPrice)}/>
                                    </View>
                            </View>
                        </View>
                        }
                    </View>
                }
            />
            
            
            {/* <View style={{marginTop:30}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Font14mediumabuabu text='Sub Total'/>
                    <Font14mediumhitam text="Rp 200.000"/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Font14mediumabuabu text='PPN 11%'/>
                    <Font14mediumhitam text="Rp.22.000"/>
                </View>

            </View> */}
        
        </View>
    </View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible);
        }}
      >
        <View style={{ flex: 1,justifyContent:'center', paddingHorizontal:20 }}>
          <View style={{paddingHorizontal:20,width:'100%',borderRadius:10, paddingVertical:45,backgroundColor:myColor.putih}}>
                <View style={{marginBottom:20}}>
                    <Font12mediumhitam text="Pindah Meja"/>
                </View>
                <View style={{marginBottom:20}}>
                <View style={{marginBottom:20}}>
                        <DropDownPicker
                            style={{zIndex:1}}
                            placeholder='Pilih Data Meja'
                            open={open2}
                            value={value2}
                            id={id2}
                            label={label2}
                            items={itemsku2}
                            setOpen={setOpen2}
                            setValue={setValue2}
                            setId={setId2}
                            setLabel={setLabel2}
                            setItems={setItemsku2}
                            />
                    </View>
                </View>
                <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity 

                        onPress={()=>{togglePindah()}}
                        style={css.tombol_full_billiard}>
                            <Font12mediumputih text="Simpan"/>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        onPress={()=>{ setModalVisible2(!modalVisible);}}
                        style={css.tombol_full_billiard_cancel}>
                            <Font12mediumputih text="Batal"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </Modal>

</>
   
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,

});



export default connect(mapStateToProps)(Tdetaillisttransaksi)

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  