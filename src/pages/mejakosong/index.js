import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {  TouchableOpacity,Text, View, Image, FlatList } from 'react-native';
import { css } from '../../assets/css/cssku';
import Font14boldputih from '../../components/atoms/font14boldputih';
import { myApi } from '../../config/service/api';


const Mejakosong = (props) => {
    const [datameja ,setDatameja]= useState ([])

    useEffect(() => {
        axios.get(`${myApi.URL}/items/listmejaByStatusTrue`)
        .then(response =>{
            console.log("DATA MEJA KOSONG ",response.data)
           setDatameja(response.data)                
       }).catch(error => {
           // console.log('Ini Eror 2',error)
           ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
       })  
    }, [0]);
    return (
        <FlatList
            keyExtractor={item => item._id}
            contentContainerStyle={{ paddingBottom: 10 , padding:20}}
            numColumns='2'
            columnWrapperStyle={{justifyContent: 'space-between'}}  
                data={datameja}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index}) =>
                <>
                  <View style={css.menuContainerBilliardGreen}>
        <View style={{alignItems:'center'}}>
            <Font14boldputih text={item.itemName}/>
            <Image
                resizeMethod={'resize'}
                resizeMode={'cover'}
                style={{height:53, width:136,borderRadius:10,marginTop : 5}}
                source={{uri:'https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png'}}
                />
        </View>
    </View>
                </>
            }
        />
    
    ); 
}

export default Mejakosong

