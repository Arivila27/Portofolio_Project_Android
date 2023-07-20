import React,{useState ,useRef,useEffect} from 'react'; 
import {Button, View,StyleSheet,Text,FlatList,Image,TouchableOpacity, ToastAndroid} from 'react-native';
import { connect } from 'react-redux';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import Tanggalsekarang from '../../molecules/home/tanggalsekarang';
import Nominalpenjualan from '../../molecules/home/nominalpenjualan';
import Namatoko from '../../molecules/home/namatoko';
import axios from 'axios';
import moment from 'moment';
import { myApi } from '../../../config/service/api';
import { myColor } from '../../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12mediumhitam from '../../atoms/font12medium';
import Font14mediumorange from '../../atoms/font14mediumorange';
import Font14boldputih from '../../atoms/font14boldputih';
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,updateProducts ,updateProductsMin ,updateCartmin, removeFromCart,addCartandQty,addpriceType, updateProductstable ,addBiliard} from '../../../redux/shopping/shoppingaction';
import Font24boldputih from '../../atoms/font24boldputih';
import Font12mediumputih from '../../atoms/font12mediumputih';
import Modal from "react-native-modal";
import Buttonbawahorange from '../../atoms/buttonbawahorange';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import CountDown from 'react-native-countdown-component';

const Mejabilliard = (props) => {
    var items = [
        {
          id: 1,
          name: 'Sewa per Jam',
        },
        {
          id: 2,
          name: 'OPENED',
        },
      ];
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibledua, setModalVisibledua] = useState(false);
    const [selectedItems, setSelectedItems] = useState([{id: 1,name: 'Sewa per Jam',}]);
    const [nomermeja,setNomerMeja] = useState('')
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(true);

    // const [jam, setJam] = useState(0);
    // const [seconds, setSeconds] = useState(0);
    // const [menit, setMenit] = useState(0);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [pilihan, setPilihan] = useState(null);

    const [itemsku, setItemsku] = useState([
        {label: 'Sewa Per Jam', value: '1'},
        {label: 'Open', value: 'open'}
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(0);
    const [itemsku2, setItemsku2] = useState([
        {label: '1 Jam', value: '1'},
        {label: '2 Jam', value: '2'},
        {label: '3 Jam', value: '3'},
        {label: '4 Jam', value: '4'},
        {label: '5 Jam', value: '5'},
        {label: '6 Jam', value: '6'},
        {label: '7 Jam', value: '7'},
        {label: '8 Jam', value: '8'},
        {label: '9 Jam', value: '9'},
        {label: '10 Jam', value: '10'},
        {label: '11 Jam', value: '11'},
        {label: '12 Jam', value: '12'},
        {label: '13 Jam', value: '13'},
        {label: '14 Jam', value: '14'},
        {label: '15 Jam', value: '15'},
        {label: '16 Jam', value: '16'},
        {label: '17 Jam', value: '17'},
        {label: '18 Jam', value: '18'},
        {label: '19 Jam', value: '19'},
        {label: '20 Jam', value: '20'},
        {label: '21 Jam', value: '21'},
        {label: '22 Jam', value: '22'},
        {label: '23 Jam', value: '23'},
        {label: '24 Jam', value: '24'},
    ]);
    // console.log("VALUE 2 ", value2)
    const hellotime = moment(props.start).format("HH:mm");
    //console.log("JAMMM NYA",hellotime)
    const toggleModalBatal = (id) => {
        console.log("IDMKUU ", id)
        dispatch(removeFromCart(id))
        setPilihan('2');
        setModalVisible(!isModalVisible);
        setRunTimer((t) => !t);
        //console.log("HHAHAHAHAHA" , id)
    };
    const toggleModal = () => {
        setPilihan('2');
        setModalVisible(!isModalVisible);
        setRunTimer((t) => !t);
        //console.log("HHAHAHAHAHA" , id)
      };
    //   const togglePindah = (id) => {
    //     //transjual/movingMejaBilyard/634a5208aadb5585c28e4eeb
    //     axios.post(`${myApi.URL}/transjual/movingMejaBilyard/${id}`,objecknya
    //     ).then(response =>{
    //         console.log("BERHASIL UPDATE")
    //     }).catch(error => {
    //         console.log('Ini Eror',error)
    //     })
    //     // setPilihan('2');
    //     // setModalVisible(!isModalVisible);
    //     // setRunTimer((t) => !t);
    //     //console.log("HHAHAHAHAHA" , id)
    //   };
    const toggleModall  = (value2,value,id) => {
        console.log(id)
        setModalVisible(!isModalVisible);
        setRunTimer((t) => !t);
      };
    const navigation = useNavigation();
    const dispatch = useDispatch();
    

    // console.log("CARTKU 1 PRODUCTSku ", props.cart)

    // console.log("ITEM TABLE STATUS ",props.tableStatus)
    
    return (
        <>
        <TouchableOpacity style={  props.tableStatus === 'open' || pilihan === 'open' ? css.menuContainerBilliardYellow :
            props.tableStatus === 'false' || pilihan === '1'  ? css.menuContainerBilliardRed:
            css.menuContainerBilliardGreen} 
        
                onPress={()=> { toggleModal()}}>
             {/* {
                props.qty == NaN || props.qty == undefined || props.qty == 0 ?
                null
                :
                <View style={ {position:'absolute',backgroundColor : 'yellow', justifyContent:'center',alignItems:'center',flex:1,flexDirection:'row',alignSelf:'center',width : '100%',height:'10%'}}>
                    <Font14mediumorange text = "READY BOOKED"/>
                </View>
               
            } */}
                     
            <View style={{alignItems:'center'}}>
                <Font14boldputih text={props.title}/>
                <Image
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    style={{height:53, width:136,borderRadius:10,marginTop : 5}}
                    source={{uri:props.image}}
                    />
            </View>
        </TouchableOpacity>  
        <Modal isVisible={isModalVisible}
            swipeDirection="left">
        <View style={{ flex: 1,justifyContent:'center'}}>
          <View style={{paddingHorizontal:20,width:'100%',borderRadius:10, paddingVertical:45,backgroundColor:myColor.putih}}>
                {
                    props.tableStatus === 'true' ?
                <View>
                    <View style={{marginBottom:20}}>
                        <Font12mediumhitam text="Metode Pemesanan"/>
                    </View>
                    <View style={{marginBottom:20}}>
                        <DropDownPicker
                            style={{zIndex:2}}
                            placeholder='Pilih Type Sewa'
                            open={open}
                            value={value}
                            items={itemsku}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItemsku}
                            />
                    </View>
                    {
                        value === '1' ?
                        <View style={{marginBottom:20}}>
                            <DropDownPicker
                                style={{zIndex:1}}
                                placeholder='Pilih Jam'
                                open={open2}
                                value={value2}
                                items={itemsku2}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItemsku2}
                                />
                        </View>
                        :
                        null
                    }
                    <View 
                    
                    style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity 

                            onPress={()=>{
                                
                                if(value === '1' && value2 === 0){
                                    ToastAndroid.show('Pilih Jam',
                                    ToastAndroid.LONG)
                                }else{

                                    dispatch(addCartandQty(props.id, value2))
                                    dispatch(updateProductstable(props.id,value2))
                                    dispatch(addpriceType(props.id,value))
                                    dispatch(addBiliard(props.title))
                                    //console.log("CART BILLIARD ",props.cart)
                                    toggleModall(value2,value,props.id)
                                    setPilihan(value)
                                }

                            }}
                            style={css.tombol_full_billiard}>
                                <Font12mediumputih text="Simpan"/>
                        </TouchableOpacity>


                        <TouchableOpacity 
                            onPress={()=>{ toggleModalBatal(props.id)}}
                            style={css.tombol_full_billiard_cancel}>
                                <Font12mediumputih text="Batal"/>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View >
                    <Font12mediumhitam text="Status : Meja Terpakai"/>
                      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between', marginTop:25}}>
                        {/* <TouchableOpacity 
                            onPress={()=>{ togglePindah(props.id)}}
                            style={css.tombol_full_billiard}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Pindah"/>
                                </View>
                        </TouchableOpacity> */}
                        <TouchableOpacity 
                            onPress={()=>{ toggleModal()}}
                            style={css.tombol_full_billiard_cancel}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Batal"/>
                                </View>
                        </TouchableOpacity>
                    </View>

                </View>    
            }
          </View>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
      {/* <Modal isVisible={isModalVisibledua}
            swipeDirection="left">
        <View style={{ flex: 1,justifyContent:'center'}}>
          <View style={{paddingHorizontal:20,width:'100%',borderRadius:10, paddingVertical:45,backgroundColor:myColor.putih}}>
                
                <View>
                    <Font12mediumhitam text={nomermeja + "Dimatikan sistem"}/>
                        <TouchableOpacity 
                            onPress={()=>{ navigation.navigate('Home')}}
                            style={css.tombol_full_100}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Ok"/>
                                </View>
                        </TouchableOpacity>
                </View> 
          </View> */}

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        {/* </View>
      </Modal> */}
      </>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,

});



export default connect(mapStateToProps)(Mejabilliard)


