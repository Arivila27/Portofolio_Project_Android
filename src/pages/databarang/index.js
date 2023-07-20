import React, { useState,useEffect } from 'react'; 

import {View,TouchableOpacity,FlatList,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import Listitemgudang from '../../components/organisms/penjualan/listitemgudang';
import { myApi } from '../../config/service/api';
import { myColor } from '../../assets/color';


const Databarang = ({token}) => {

    
    const [data ,setData] = useState('')
    const [fulldata,setFulldata] =useState('')
    const [query, setQuery] = useState('');


    const dataku = [
        {
            _id:"jsowjowjdojod",
            itemName:"Gula",
            itemSatuan:"Gram",
            itemStokMasuk:20,
            itemStokKeluar:5,
            itemStokAkhir:15
        },
        {
            _id:"jsowjowjdojod",
            itemName:"Bubuk Coklat",
            itemSatuan:"Gram",
            itemStokMasuk:50,
            itemStokKeluar:5,
            itemStokAkhir:15
        }
    ]

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
                // setData(response.data)
                // setFulldata(response.data)

               
                setData(dataku)
                setFulldata(dataku)
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
        const itemData = item.itemName.toUpperCase();
        const textData = query.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      if (text==='') {
        // setData(fulldata)
        
        setData(dataku)
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
                        <Listitemgudang id={item._id} total={item.transTotalBayar} transId={item.transId} transName={item.transName} transTable={item.transtable} biliard={item.transPesanan}/>
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


export default connect(mapStateToProps)(Databarang)