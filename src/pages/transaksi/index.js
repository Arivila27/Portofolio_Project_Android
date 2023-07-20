import React, { useEffect, useState } from 'react'; 

import {View,TouchableOpacity,ToastAndroid,FlatList,RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColor } from '../../assets/color';
import moment from 'moment';
import { css } from '../../../assets/css/cssku';
import { connect } from 'react-redux';
import axios from 'axios';
import { myApi } from '../../config/service/api';
import Productsku from '../../components/organisms/products/products';
import { useDispatch } from 'react-redux';
import Font12regularcenter from '../../components/atoms/fon12regularcenter';
import Mejabilliard from '../../components/organisms/products/mejabilliard';
import Mejatransaksi from '../../components/organisms/products/mejatransaksi';
const Transaksi = ({products,cart,infoMeja}) => {

    // const navigation = useNavigation();
    // const dispatch = useDispatch();
    // const Globalstate = useSelector(data => data);
    // // console.log("Global State " , Globalstate.reducerDataMakanan)
    const [data ,setData]= useState([])
    
    const tglku = moment(new Date()).format("DD-MM-YYYY")
    // const [makanan,setMakanan] = useState([]) 
    // const navigation = useNavigation();
    // const apaya  =  products.filter((s) => s.itemCategory === "MEJA")
    // console.log("data meja" ,apaya)
    
    useEffect(() => {
        const getData = async () => {
            axios.get(`${myApi.URL}/transjual/listTransStatus/no/`).then(response =>{
                 //console.log('DATA', response.data)
                // console.log('KUPON KU ' , response.data.length)
                // setData(response.data);
                var arraykusatu = []
                response.data.map((obj)=> {
                    console.log("YA ALLAH",obj)
                    const pesanancuy = obj.transPesanan
                    for (let index = 0; index < pesanancuy.length; index++) {
                        if(pesanancuy[index].itemNoted === "open" || pesanancuy[index].itemNoted === "1" ){
                            return arraykusatu.push({
                                _id: obj._id,
                                noMeja: "Biliard" + pesanancuy[index].itemName,
                                itemName: pesanancuy[index].itemName,
                                transCreated: obj.transCreated,
                                transtable : obj.transtable,
                                transName: obj.transName,
                                transPesanan : pesanancuy,
                                itemNoted:  pesanancuy[index].itemNoted,
                                transClosed : obj.transClosed || '0',
                                itemQty:  pesanancuy[index].itemQty,
                                itemCode:  pesanancuy[index].itemCode,
                                itemID:  pesanancuy[index]._id
                            })
                        }
                    }
                })
                //console.log("WOI SAHABAT",arrayMerge)
                setData(arraykusatu);
            }).catch(error => {
                console.log('Ini Eror',error)
                ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
        }
  
    setTimeout(() => {
      getData()
    }, )
  }, [0])

    // const [refreshing, setRefreshing] = React.useState(false);
    // const onRefresh = React.useCallback(() => {
    //     setRefreshing(true);
    //     wait(200).then(() =>
        
    //     setRefreshing(false));
    //   }, []);

    
    return(
        <View style={{ height:'100%', backgroundColor:myColor.abuabu,paddingHorizontal:20,paddingTop:5}}>
             <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    <View style={{backgroundColor:'red',width:29,height:29,marginRight:10, borderRadius:100}}></View>
                    <Font12regularcenter text="Durasi/Sewa"/>
                </View>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    <View style={{backgroundColor: myColor.warna1 ,width:29,height:29,marginRight:10, borderRadius:100}}></View>
                    <Font12regularcenter text="Open"/>
                </View>
            </View>
        <FlatList 
            // refreshControl={
            //     <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={onRefresh}
            //     />
            // }
            keyExtractor={item => item._id}
            contentContainerStyle={{ paddingBottom: 10}}
            numColumns='2'
            columnWrapperStyle={{justifyContent: 'space-between'}}  
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index}) =>
                <>
                    <Mejatransaksi transtable={item.transtable} tableStatus={item.itemNoted} transClosed={item.transClosed} itemName={item.itemName} start={item.transCreated} title={item.noMeja}  id={item._id} itemID={item.itemID} qty={item.itemQty} itemCode={item.itemCode} itemStatus={item.itemNoted}/> 
                </>
            }
        />

        {/* <TouchableOpacity 
        onPress={()=>{
          var res =  products.map(obj => cart.find(o => o.id === obj.id) || obj);
          dispatch(replaceProducts(res))
          console.log("REPLACE ",res)
        }}
        style={{width:150,height:50, backgroundColor:'red',marginTop:20}}>
            
        </TouchableOpacity> */}
    </View>
    )
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    statusku: state.shop.statusku,
    datalogin: state.shop.datalogin,

});


export default connect(mapStateToProps)(Transaksi)
