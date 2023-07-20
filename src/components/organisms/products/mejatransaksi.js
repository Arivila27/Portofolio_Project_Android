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
import Font14mediumhitam from '../../atoms/font14mediumhitam';
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
import Font24boldorange from '../../atoms/font24boldorange';
import { navigateRef } from '../../../router/router';

const Mejatransaksi = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibletiga, setModalVisibletiga] = useState(false);
    const [nomermeja,setNomerMeja] = useState('')
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(true);
    const [datameja ,setDatameja]= useState ([])
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [meja, setMeja] = useState('')
    useEffect(() => {
        axios.get(`${myApi.URL}/items/listmejaByStatusTrue`)
        .then(response =>{
           setDatameja(response.data)                
       }).catch(error => {
           // console.log('Ini Eror 2',error)
           ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
       })  
    }, [0]);
    useEffect(() => {
        let timerId;
       // var minutes = 0 ;
        // if (props.transClosed ==="0" || props.qty == NaN || props.qty == undefined && props.qty < '60') {
        //     minutes = props.qty * 1;
        // }else{
        //     minutes = 0;
        // }
        if (runTimer ) {
          var number = props.qty * 60
          var today = new Date() ;
          var last = props.start
          var momentsatu = moment(today).format();
          var momentdua = moment(last).format();
          var duration = moment.duration(moment(momentsatu).diff(momentdua));
          var hours = duration.asMinutes();
          var coba = Math.floor(hours)
          var cobadua = parseInt(coba)
          var final = number - cobadua
          var finallagi = final * 60
          
          setCountDown(finallagi);
          timerId = setInterval(() => {
            setCountDown((countDown) => countDown - 1);
          }, 1000);
        } else {
          clearInterval(timerId);
        }
        return () => clearInterval(timerId);
      }, [runTimer]);
    useEffect(() => {
    if (countDown < 0 && props.itemStatus ==='1') {
        console.log("STEP 1 " , props.itemStatus)
        setRunTimer(false);
        setCountDown(0);
        console.log("STEP 2 Masuk Sini Expiret Countdown ")
        const  objecknya = {
            itemStatus: "true",
            itemQty : 0,
            itemStart : "0"
        }
            setNomerMeja(props.title)
        axios.patch(`${myApi.URL}/items/updateItem/${props.itemID}`,objecknya
        ).then(response =>{
            console.log("BERHASIL UPDATE MEJA BILLIARD ,")
        
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        var isupdate = {
            transClosed : new Date()
        }
        axios.post(`${myApi.URL}/transjual/updateTrans/${props.id}` ,isupdate)
            .then(response =>{
                console.log("Berhasil menambahkan item closed",response.data)
        }).catch(error => {
            ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${props.itemCode}/2`
        ).then(response =>{
            console.log("BERHASIL UPDATE")
        }).catch(error => {
            console.log('Ini Eror',error)
        })
    }
    }, [countDown, runTimer]);

    const _renderAlphabet = ( {item,itemku} ) => {
        return (
            <TouchableOpacity onPress={() => {
                setSelectedLetter(item);
                setMeja(itemku)
                }} style={item === selectedLetter ? css.menuContainerBilliardYellow  :  css.menuContainerBilliardGreen }>
                <View style={{alignItems:'center'}}>
                    <Font14boldputih text={itemku.itemName}/>
                    {/* <Image
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        style={{height:93, width:136,borderRadius:10,marginTop : 5}}
                        source={{uri:props.image}}
                        /> */}
                </View>
            </TouchableOpacity>  
        )
    }
    var jam = String(Math.floor(countDown / 3600)).padStart(2,0);
    //setJam(jam)
    var seconds = String(countDown % 60).padStart(2, 0);
    //setSeconds(seconds)
    //console.log("WOI", props.qty)
    //console.log("HALO", countDown)
    const hitungan = (props.qty * 60) - 60
    if (countDown >= 3600) {
        var menit = String(Math.floor((countDown /60) - hitungan )).padStart(2, 0);
        //var menit = String(Math.floor(countDown / 60 - hitungan )).padStart(2, 0);
        //onsole.log("MENIT", menit)
        //setMenit(menit)
    }else{
        var menit = String(Math.floor((countDown /60))).padStart(2, 0);
        //setMenit(menit)
    }
    const hellotime = moment(props.start).format("HH:mm");
    var hellotimedua ;
    if (props.transClosed ==="0" || props.qty == NaN || props.qty == undefined) {
        hellotimedua = moment(new Date()).format("HH:mm");
    }else{
        hellotimedua = moment(props.transClosed).format("HH:mm");
    }
    //console.log("JAMMM NYA",hellotime)
    const toggleBatal  = () => {
        setModalVisibletiga(!isModalVisibletiga);
    }
    const togglePindah = () => {
        setModalVisibletiga(!isModalVisibletiga);
    };
    const toggleClose = () => {
        setModalVisible(!isModalVisible);
    }
    const tooglesimpanClose = () => {
        var isupdate = {
            transClosed : new Date()
        }
        axios.post(`${myApi.URL}/transjual/updateTrans/${props.id}` ,isupdate)
            .then(response =>{
                console.log("Berhasil menambahkan item closed",response.data)
        }).catch(error => {
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        var objek = {
            "transPesanan.$._id": meja._id,
            "transPesanan.$.itemCode": meja.itemCode,
            "transPesanan.$.itemName": meja.itemName
        }
        axios.post(`${myApi.URL}/transjual/movingMejaBilyard/${props.id}/${props.itemID}` ,objek)
            .then(response =>{
                console.log("Respon Nya Respon Nya",response.data)
                
        }).catch(error => {
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        const  objeckwoi = {
            itemStatus: "true",
            itemQty : 0,
            itemStart : "0"

        }
        console.log("IDNYA", props.itemID)
        axios.patch(`${myApi.URL}/items/updateItem/${props.itemID}`,objeckwoi
        ).then(response =>{
            console.log("BERHASIL UPDATE MEJA BILLIARD ,")
        
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${props.itemCode}/2`
          ).then(response =>{
              console.log("BERHASIL UPDATE")
          }).catch(error => {
              console.log('Ini Eror',error)
          })
          setModalVisible(!isModalVisible);
        
    }
    const togglesimpanPindah = () => {
        var objek = {
                    "transPesanan.$._id": meja._id,
                    "transPesanan.$.itemCode": meja.itemCode,
                    "transPesanan.$.itemName": meja.itemName
        }
        axios.post(`${myApi.URL}/transjual/movingMejaBilyard/${props.id}/${props.itemID}` ,objek)
            .then(response =>{
                console.log("Respon Nya Respon Nya",response.data)
                
        }).catch(error => {
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
        const mejasatu = {
            itemStatus: "true",
            itemStart : "0",
            itemQty : "0"
        }
        axios.patch(`${myApi.URL}/items/updateItem/${props.itemID}`,mejasatu
        ).then(response =>{
            console.log("BERHASIL UPDATE MEJA 1")
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        var stts = '';
        var jmlh = 0 ;
        if (props.itemStatus==='open') {
            stts = 'open'
            jmlh = props.qty
        } else {
            stts = 'false'
            jmlh = props.qty * 60
        }
        const mejadua = {
            itemStatus: stts,
            itemStart : props.start,
            itemQty : props.qty
        }
        axios.patch(`${myApi.URL}/items/updateItem/${meja._id}`,mejadua
        ).then(response =>{
            navigation.navigate('Home')
            console.log("BERHASIL UPDATE MEJA 2")
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${meja.itemCode}/1`
        ).then(response =>{
            console.log("RESPON LAMPU",response.data)
            console.log("BERHASIL UPDATE")
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${props.itemCode}/2`
        ).then(response =>{
            console.log("RESPON LAMPU",response.data)
            console.log("BERHASIL UPDATE")
        }).catch(error => {
            console.log('Ini Eror',error)
        })
        setModalVisibletiga(!isModalVisibletiga);
    }
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    return (
        <>
        <View style={  props.tableStatus === 'open'  ? css.menuContainerBilliardYellow : css.menuContainerBilliardRed}>
            <View style={{alignItems:'center'}}>
                <Font14boldputih text={props.title}/>
            </View>
            {props.qty ==="0" || props.qty == NaN || props.qty == undefined ?
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{marginTop:8}}>
                        <Font12mediumhitam text="Start Time : " />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={hellotime} />
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{marginTop:8}}>
                        <Font12mediumhitam text="End Time : " />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={hellotimedua} />
                    </View>
                </View>
            </View>
            :
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{marginTop:8}}>
                        <Font12mediumhitam text="Start Time : " />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={hellotime} />
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{marginTop:8}}>
                        <Font12mediumhitam text="End :" />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={jam}  />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text=":"  />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={menit}  />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text=":"  />
                    </View>
                    <View style={{marginTop:8}}>
                        <Font12mediumputih text={seconds}  />
                    </View>
                </View>
            </View>
            }
            {
              props.transClosed ==="0" || props.qty == NaN || props.qty == undefined ?
              <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
                <TouchableOpacity 
                onPress={()=> {togglePindah()}}
                // onPress={()=> dispatch(tambahCounter(counter))}
                style={{height:30,width:'100%', borderWidth:1,borderColor:myColor.hijau, marginRight:5, backgroundColor: myColor.hijau, borderRadius:10,marginTop:16,alignItems:'center',justifyContent:'center'}}>
                    <Font12mediumhitam text="Pindah"/>
                </TouchableOpacity>
                {/* <TouchableOpacity 
                onPress={()=> { toggleClose()}}
                // onPress={()=> dispatch(tambahCounter(counter))}
                style={{height:30, width:'50%',borderWidth:1,borderColor:myColor.abuabu,backgroundColor: myColor.abuabu,borderRadius:10,marginTop:16,alignItems:'center',justifyContent:'center'}}>
                    <Font12mediumhitam text="Close"/>
                </TouchableOpacity> */}
            </View>
            :
                <TouchableOpacity 
                style={css.tombol_full_closed}>
                    <Font14mediumhitam text="Closed"/>
                </TouchableOpacity>
            }
            
        </View>  
        <Modal isVisible={isModalVisible}
            swipeDirection="left">
            <View style={{ flex: 1,justifyContent:'center'}}>
                <View style={{paddingHorizontal:20,width:'100%',borderRadius:10, paddingVertical:45,backgroundColor:myColor.putih}}>
                <View>
                    <Font12mediumhitam text="Yakin? : Meja Akan Di Close / Di matikan"/>
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between', marginTop:25}}>
                        
                        <TouchableOpacity 
                            onPress={()=>{ tooglesimpanClose() }}
                            style={css.tombol_full_billiard}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Close"/>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{ toggleModal(props.id)}}
                            style={css.tombol_full_billiard_cancel}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Batal"/>
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
      </Modal>
      <Modal isVisible={isModalVisibletiga}
            swipeDirection="left">
            <View style={{paddingHorizontal:10,paddingTop:10,flex:1}}>
                    <FlatList
                        style={{marginBottom:120}}
                        keyExtractor={item => item._id}
                        contentContainerStyle={{ paddingBottom: 10}}
                        numColumns='2'
                        columnWrapperStyle={{justifyContent: 'space-between'}}  
                            data={datameja}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item,index}) =>
                            _renderAlphabet({item: item._id,itemku:item})
                        }
                    />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between', marginTop:25}}>
                        <TouchableOpacity 
                            onPress={()=>{ togglesimpanPindah() }}
                            style={css.tombol_full_billiard}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Pindah"/>
                                </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{ toggleBatal()}}
                            style={css.tombol_full_billiard_cancel}>
                            <View style={{alignItems:'center'}}>
                                    <Font12mediumputih text="Batal"/>
                                </View>
                        </TouchableOpacity>
            </View>
      </Modal>
      </>
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,

});



export default connect(mapStateToProps)(Mejatransaksi)