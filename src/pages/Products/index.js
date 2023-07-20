import React from 'react'; 

import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { css } from '../../assets/css/cssku';
import Tregister from '../../components/templates/tregister';
import { connect } from 'react-redux';
import { myColor } from '../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12regularcenter from '../../components/atoms/fon12regularcenter';
import Font12mediumhitam from '../../components/atoms/font12medium';
import Font14mediumorange from '../../components/atoms/font14mediumorange'
import Productsku from '../../components/organisms/products/products';

const Products = ({ cart, products ,props}) => {
    return (
        
        <View style={{ height:'100%', backgroundColor:myColor.abuabu,paddingHorizontal:20,paddingTop:19}}>
           
            <FlatList
                    keyExtractor={item => item._id}
                    contentContainerStyle={{ paddingBottom: 10}}
                    numColumns='2'
                    columnWrapperStyle={{justifyContent: 'space-between'}}  
                        data={products}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item,index}) =>
                        <Productsku image={item.image} title={item.title} price={item.price} id={item.id} cart={cart}/> 
                    }
                />
        </View>
    );
}

const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
});

export default connect(mapStateToProps)(Products)
