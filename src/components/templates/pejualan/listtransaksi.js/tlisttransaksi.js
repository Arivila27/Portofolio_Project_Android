import React, { useState,useEffect } from 'react'; 

import {View,TouchableOpacity,FlatList,TextInput} from 'react-native';
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
import Font14boldhitam from '../../../atoms/font14boldhitam';
import axios from 'axios';
import { myApi } from '../../../../config/service/api';
import { connect, useDispatch } from 'react-redux';
import Listitemtransaksi from '../../../organisms/penjualan/listitemtransaksi';

const Tlisttransaksi = ({token}) => {

    
    const [data ,setData] = useState('')
    const [fulldata,setFulldata] =useState('')
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            axios.get(`${myApi.URL}/transjual/listTransStatus/no`,{
                headers:{
                    'auth-token':token
                }
             })
             .then(response =>{
                console.log('Fungtion')    
                //console.log("RESPONSE API LIST TRANSAKSI STATUS",response.data)
                setData(response.data)
                setFulldata(response.data)
            }).catch(error => {
                // console.log('Ini Eror 2',error)
                // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
        //   dispatch(updateDataMakanan(datamakanan))
        }
  
    setTimeout(() => {
      console.log("COK");
      getData()
    }, )
  }, [])
  const handleSearch = text => { 
     var apaya = fulldata.filter(item => {
        const itemData = item.transName.toUpperCase();
        const textData = query.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      if (text==='') {
        setData(fulldata)
        setQuery(text)
      }else{
        setData(apaya)
        setQuery(text)
      }
  };
   
    const navigation = useNavigation();
    return (
    <View style={{marginHorizontal:20,paddingTop:25}}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20, marginBottom : 10 , borderColor:myColor.inputan1,borderWidth:1,borderRadius:6 }}
        />
        <View style={{marginVertical:15}}>
            <View style={{height:1,width:"100%",backgroundColor:myColor.abuabu}}/>
        </View>

        <FlatList
                style={{marginBottom:150}}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingBottom: 10}}
                numColumns='1'
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) =>
                        <Listitemtransaksi id={item._id} total={item.transTotalBayar} transId={item.transId} transName={item.transName} transTable={item.transtable} biliard={item.transPesanan}/>
                }
            />
    </View>
   
    );
}

const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    statusku: state.shop.statusku,
    token: state.shop.token,

});


export default connect(mapStateToProps)(Tlisttransaksi)