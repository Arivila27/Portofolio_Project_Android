import React ,{useEffect,useState}from 'react'; 
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch,useSelector } from 'react-redux'
import { navigationPush } from '../../../../utils/navigationMethods';
import { myColor } from '../../../../assets/color';
import { addStatus } from '../../../../redux/shopping/shoppingaction';
const Iconhome = ({statusku ,...prop}) => {
        
    const dispatch = useDispatch();
    console.log("ANUS ", statusku)

    return (
        <TouchableOpacity 
        onPress={()=> {
            dispatch(addStatus(!statusku))
            navigationPush('Home')}}
        style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',height:40}} >
                <View style={{justifyContent:'center'}}>
                    <Icon
                        name='home'
                        size={25}
                        color={myColor.putih}
                    />
                </View>
            </View>
            {/* <View style={{justifyContent:'center',alignItems:'center',marginLeft:10}}>
                <View style={{justifyContent:'center',alignItems:'center', backgroundColor:myColor.warna1,width:40,height:20,borderRadius:50}}>
                </View>
            </View> */}
        </TouchableOpacity>
    );
}
const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Iconhome)




