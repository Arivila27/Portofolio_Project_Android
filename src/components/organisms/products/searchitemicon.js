import React ,{useEffect,useState}from 'react'; 
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import Tanggalsekarang from '../../molecules/home/tanggalsekarang';
import Nominalpenjualan from '../../molecules/home/nominalpenjualan';
import Namatoko from '../../molecules/home/namatoko';
import { myColor } from '../../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';

import Font12mediumhitam from '../../atoms/font12medium';
import Font14mediumorange from '../../atoms/font14mediumorange';
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../../../redux/shopping/shoppingaction';

import Font14boldputih from '../../atoms/font14boldputih';
import { navigationPush } from '../../../utils/navigationMethods';
import axios from 'axios';
import { myApi } from '../../../config/service/api';
const Searchitemicon = ({statusku,token,products}) => {
    const apaya = products
    const apaya2 = products

    const [query, setQuery] = useState('');

    const handleSearch = text => {
        const newData = apaya.filter(item => {
            const itemData = item.itemName.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
          });
          
          setQuery(text)
      };
   
    return (

        <View style={{flexDirection:'row',backgroundColor:myColor.putih , height:40,width:"8%"}}>
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{ flex:1}}
            />


        </View>

    );
}
const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
    products: state.shop.products,

});

export default connect(mapStateToProps)(Searchitemicon)




