import React, { useEffect, useState } from 'react'; 

import {View,TouchableOpacity,TextInput,FlatList} from 'react-native';
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
import { connect } from 'react-redux';
import Productsku from '../../../organisms/products/products';
import { addDataLogin, addProducts, deleteCart, deleteTable, deleteUser } from '../../../../redux/shopping/shoppingaction';
import { useDispatch } from 'react-redux';

const SecondRoute = ({products,cart,infoMeja}) => {


    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    var apaya ;
    if (query==='') {
        apaya = products.filter((s) => s.itemCategory === "MINUMAN")
        console.log("MAKANANANANANANA")
    } else {
        apaya = products.filter(item => {
            const itemData = item.itemName.toUpperCase();
            const textData = query.toUpperCase();
            return itemData.indexOf(textData) > -1
          });
          console.log("whyyyy")
    }
        const handleSearch = text => { 
          setQuery(text)
      };
    
    return(
        <View style={{ height:'100%', backgroundColor:myColor.abuabu,paddingHorizontal:20,paddingTop:19}}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20, marginBottom : 10 }}
        />
        <FlatList
            keyExtractor={item => item._id}
            contentContainerStyle={{ paddingBottom: 10}}
            numColumns='2'
            columnWrapperStyle={{justifyContent: 'space-between'}}  
                data={apaya}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index}) =>
                <>
                    <Productsku image={item.itemImage} title={item.itemName} price={item.itemPrice} id={item._id} cart={cart} qty={item.itemQty}/> 
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
    infoMeja: state.shop.infoMeja,
});

export default connect(mapStateToProps)(SecondRoute)

