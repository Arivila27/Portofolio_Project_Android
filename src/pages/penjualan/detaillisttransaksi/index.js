import React , {useEffect, useState} from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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
import { useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import { myApi } from '../../../config/service/api';
import moment from 'moment';
import axios from 'axios';
import numberFormat from '../../../utils/numberFormat';
import { useDispatch } from 'react-redux';
import { addCart2, addCartAll, addCount, addBiliard,addPelanggan, addIdtrans,addTable, deleteCart1 } from '../../../redux/shopping/shoppingaction';
import Font14mediumabuabu from '../../../components/atoms/font14mediumabuabu';
import Loading from '../../../components/atoms/loading';

const Detaillisttransaksi = ({token,products,cart}) => {
    const navigation = useNavigation();
    const route = useRoute();
    // console.log("JANGKREK  ",route.params.idku)
    const [isLoading, setIsLoading] = useState(false);

    const [data,setData] = useState('')
    const [jumlah,setJumlah] = useState(0)
    const [jumlahPPN,setJumlahPPN] = useState(0)

    //const [jumlahmeja,setJumlahMeja] = useState(0)
    const dispatch = useDispatch();

    var arrayku = [];
    cart.map((obj)=> {
        return arrayku.push( {
            _id: obj._id,
            itemCode: obj.itemCode,
            itemName: obj.itemName,
            itemPrice: obj.itemPrice,
            itemImage: obj.itemImage,
            itemQty: obj.itemQty,
            itemNoted: obj.itemNoted
        })
    })


    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
             axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
             .then(response=>{
                const siang = response.data[0].itemPrice
                const malam = response.data[1].itemPrice
                 axios.get(`${myApi.URL}/transjual/listTransById/${route.params.idku}`,{
                    headers:{
                        'auth-token':token
                    }
                 })
                 .then(response =>{
                    setIsLoading(false)
                    // console.log('Fungtion')
                    dispatch(addCartAll(response.data.transPesanan))
                    
                    //  console.log("RESPONSE API DETAIL LIST TRANSAKSI STATUS",response.data)
                    var jumlahasli ;
                    var jumlahajem = 0 ;
                    for (let index = 0; index < response.data.transPesanan.length; index++) {
                        if (response.data.transPesanan[index].itemNoted==="open") {
                            dispatch(addBiliard(response.data.transPesanan[index].itemName))
                            const hours = new Date().getHours()
                            const isDayTime = hours > 6 && hours < 18
                            var today2 = new Date() ;
                            var last2 = response.data.transCreated
                            var last42 = new Date(response.data.transCreated).getHours()
                            // console.log("JANGAN PILIH KASIH",isDayTime )
                            const isDayTime2 = last42 > 6 && last42 < 18
                            var momentsatu2 = moment(today2).format();
                            var momentdua2 = moment(last2).format();
                            var duration2 = moment.duration(moment(momentsatu2).diff(momentdua2));
                            var hours2 = duration2.asMinutes();
                            var coba2 = Math.floor(hours2)
                            var time = parseInt(coba2)
                            if(isDayTime===false && isDayTime2===true){
                                if (time<60) {
                                    jumlahasli = malam + response.data.transTotalBayar
                                    jumlahajem = malam
                                    setJumlah(jumlahasli)
                                } else {
                                   // console.log("MASUK SINI WOI ")
                                   //duration 2 ngitung buat sebelum timechange
                                   //duration 3 brarti buat stelah timechange
                                    var d = new Date(response.data.transCreated);
                                    var lemah = d.setHours(18,0);
                                    var kuat = d.setHours(18,0);
                                    var e = new Date();
                                    var las2 = response.data.transCreated
                                    var momentsat2 = moment(lemah).format();
                                    var momentsat3 = moment(kuat).format();
                                    var momentdu2 = moment(las2).format();
                                    var momentdua3 = moment(e).format();
                                    var duratio2 = moment.duration(moment(momentsat2).diff(momentdu2));
                                    var duratio3 = moment.duration(moment(momentdua3).diff(momentsat3));
                                    var hour2 = duratio2.asMinutes();
                                    var cob2 = Math.floor(hour2)
                                    var tim2 = parseInt(cob2)
                                    var hour3 = duratio3.asMinutes();
                                    var cob3 = Math.floor(hour3)
                                    var tim3 = parseInt(cob3)
                                    var inijumlahdua = cob2 * (siang / 60)
                                    var inijumlahtiga = cob3 * (malam / 60)
                                    var inijumlahfinal = inijumlahdua + inijumlahtiga  + response.data.transTotalBayar ;
                                    //setJumlahMeja(Math.floor(inijumlahdua + inijumlahtiga))
                                    var mathjum = Math.floor(inijumlahdua + inijumlahtiga)
                                    // console.log("woiiiiiiiiiii 1" ,tim2)
                                    // console.log("woiiiiiiiiiii 2" ,tim3)
                                    // console.log("woiiiiiiiiiii 3" ,mathjum)
                                    jumlahajem = parseInt(mathjum)
                                    setJumlah(Math.floor(inijumlahfinal))
                                }
                            }else if(isDayTime===false){
                                if (time<60) {
                                    // console.log("HAI ARI")
                                    jumlahasli = malam + response.data.transTotalBayar
                                    jumlahajem = malam
                                    setJumlah(jumlahasli)
                                } else {
                                    const inijumlah = time * (malam / 60)
                                    const mathjum = Math.floor(inijumlah)
                                    const penjumlahan = mathjum + response.data.transTotalBayar
                                    jumlahasli = parseInt(penjumlahan)
                                    jumlahajem =parseInt(mathjum)
                                    setJumlah(jumlahasli)
                                }
                            }else{
                                if (time<60) {
                                    jumlahasli = siang + response.data.transTotalBayar
                                    jumlahajem = siang
                                    setJumlah(jumlahasli)
                                    //setJumlahMeja(siang)
                                } else {
                                    const inijumlah = time * (siang / 60)
                                    const mathjum = Math.floor(inijumlah)
                                    const penjumlahan = mathjum + response.data.transTotalBayar
                                    jumlahasli = parseInt(penjumlahan)
                                    jumlahajem =parseInt(mathjum)
                                    setJumlah(jumlahasli)
                                }
                            }
                        }else{
                            const keneko = response.data.transTotalBayar + jumlahajem
                            setJumlah(keneko)
                            const objecknya2 = {
                                transTotalBayar: keneko,
                                transPesanan: arrayku
                            }
                            axios.post(`${myApi.URL}/transjual/cekMejaById/${route.params.idku}/${jumlah}`,{
                                headers:{
                                    'auth-token':token
                                }
                            }).then(response =>{
                                dispatch(addBiliard(response.data.transPesanan[index].itemName))
                                // console.log('BISA APAA COK MENDEM' )
                                // console.log("RESPON API JOSS",response.data)
                                setJumlahPPN(response.data)
                                // navigation.navigate('Menupenjualan')  
                            }).catch(error => {
                                console.log('Ini Eror',error)
                            })
                            
                        }
                        
                    }
                    setData(response.data)
                    
                }).catch(error => {
                    setIsLoading(false)
                    // console.log('Ini Eror 2',error)
                    // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
                })
             }).catch(error => {
                setIsLoading(false)
                // console.log('Ini Eror 2',error)
                // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
           
        //   dispatch(updateDataMakanan(datamakanan))
        
        }
    setTimeout(() => {
      getData()
    }, )
  }, [])

    return (
        
    <View style={{flex:1}}>        
       <Tdetaillisttransaksi id={data._id} meja={data.transtable} kasir={data.transKasir} waktu={data.transTime} tgl={data.transDate} transCreated={data.transCreated} pelanggan={data.transName} pesanan={data.transPesanan}/>
       <View style={{paddingTop:10,paddingHorizontal:22, position:'absolute',borderTopLeftRadius:20,borderTopRightRadius:20,bottom:0,backgroundColor:myColor.putih,width:'100%'}}>
            {/* <Font14regularhitam text="3 Produk"/> */}
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Font14mediumabuabu text="Sub Total"/>
                <Font14mediumabuabu text={numberFormat(jumlah)}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between' , marginBottom:3}}>
                <Font14mediumabuabu text="Tax"/>
                <Font14mediumhitam text={numberFormat(data.transTotalPPN)}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:3}}>
                <Font14boldhitam text="Total Tagihan"/>
                <Font16boldwarna1 text={numberFormat(jumlah + data.transTotalPPN)}/>
                
            </View>
            <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between'}}>
                <TouchableOpacity
                    onPress={()=>{
                        // console.log("YA ALLAH ", data)
                        dispatch(addTable({mejaNumber: data.transtable}))
                        dispatch(addCart2(data.transPesanan))
                        dispatch(addCount({total:jumlah}))
                        dispatch(addPelanggan({nama:data.transName , trans_id :route.params.idku }))
                        // dispatch(addCount(numberFormat(data.transTotalBayar)))
                        navigation.navigate('Cetakbill',{idTrans: data.transId,nama:data.transName,transBayar:data.transTotalBayar,transPpn : data.transTotalPPN})
                    }} style={{width:"48%",height:46,backgroundColor:myColor.tombol2,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                        <Font14mediumhitam text="Cetak Bill"/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    dispatch(addCart2(data.transPesanan))
                    dispatch(deleteCart1())
                    dispatch(addPelanggan({nama:data.transName}))
                    dispatch(addIdtrans({trans_id :route.params.idku}))
                    dispatch(addTable({mejaNumber: data.transtable}))
                    navigation.navigate('Menupenjualan')
                }}
                style={{width:"48%",height:46,backgroundColor:myColor.tombol1,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                    <Font14mediumhitam text="Lanjutkan"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={()=>{
                // console.log("YA ALLAH ", data)
                dispatch(addCart2(data.transPesanan))
                dispatch(addCount({total:jumlah + data.transTotalPPN, ppn:data.transTotalPPN, transCreated:data.transCreated} ))
                dispatch(addPelanggan({nama:data.transName , trans_id :route.params.idku }))
                // dispatch(addCount(numberFormat(data.transTotalBayar)))
                navigation.navigate('Pembayaran',{idTrans: data.transId,nama:data.transName,transBayar:data.transTotalBayar})
            }}
            style={{marginVertical:10, width:"100%",height:46,backgroundColor:myColor.warna1,borderRadius:6,justifyContent:'center',alignItems:'center'}}>
                <Font14boldputih text="Bayar"/>
            </TouchableOpacity>
        </View>
        { isLoading ? <Loading/> : null }
    </View>
   
    );
}

const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
    products: state.shop.products,
    cart: state.shop.cart,
});

export default connect(mapStateToProps)(Detaillisttransaksi)

