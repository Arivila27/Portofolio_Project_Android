import React, { useState,useEffect } from 'react'; 

import {View,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../config/context'

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Thome from '../../components/templates/thome';
import Font14mediumhitam from '../../components/atoms/font14mediumhitam';
import Font14boldputih from '../../components/atoms/font14boldputih';
import { myColor } from '../../assets/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect, useDispatch } from 'react-redux';
import Font24boldputih from '../../components/atoms/font24boldputih';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font14boldhitam from '../../components/atoms/font14boldhitam';
import { addDataLogin } from '../../redux/shopping/shoppingaction';

const Profile = ({datalogin,...props}) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const [nama,setNama] = useState('');
    const [email,setEmail] = useState('');


    console.log("DATA LOGIN ",datalogin)

    const { signOut } = React.useContext(AuthContext)
    const logoutHandle =async ()=> {
        signOut()
     }
     const  removeItemValue = async(key)=> {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
            return false;
        }
    }


    useEffect(() => {
        const getData = async () => {
            const idnya2 = await AsyncStorage.getItem('DATALOGIN')
            const idnya = JSON.stringify(idnya2)
            let jsonObject = JSON.parse(idnya)
            var myObj = JSON.parse(jsonObject)
            setNama(myObj.userName)
            setEmail(myObj.userEmail)

            dispatch(addDataLogin(myObj))
            axios.get(`${myApi.URL}/items/listItemAll`,{
                headers:{
                    'auth-token':myObj.userToken
                }
             })
             .then(response =>{
                setData(response.data)
                // console.log('Fungtion')    
                //console.log("RESPONSE API PRODUCTS",response.data)
                dispatch(addProducts(response.data))              
            }).catch(error => {
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
    
        <View style={{backgroundColor:myColor.abuabu , flex:1}}>

            <View style={{height:250, backgroundColor:myColor.warna1,paddingTop:30}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Image 
                        style={{width:150,height:150}}
                        source={require('./../../assets/img/rioputih.png')}></Image>
                    </View>
                    <View>
                        <Font24boldputih text={nama}/>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection:'row', backgroundColor:myColor.putih,marginTop:20,paddingHorizontal:10,paddingVertical:20}}>
                    <Icon name='envelope' size={30} color={myColor.warna1} />
                    <View style={{justifyContent:'center',marginLeft:20}}>
                        <Font14boldhitam text={email}/>
                    </View>
                </View>

            </View>

            <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
            <TouchableOpacity 
                onPress={()=>{
                    removeItemValue('DATALOGIN')
                    logoutHandle()
                    }} 
                style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Font14boldputih text="Log Out"/>
            </TouchableOpacity>
        </View>            

        </View>

    // <View style={css.backgroundpageputih}>
    //     <ScrollView>
    //         <Thome/>
    //     </ScrollView>
    
    //     <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
    //         <TouchableOpacity 
    //             onPress={()=>{
    //                 removeItemValue('DATALOGIN')
    //                 logoutHandle()
    //                 }} 
    //             style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
    //             <Font14boldputih text="Log Out"/>
    //         </TouchableOpacity>
    //     </View>
    // </View>
    );
}



const mapStateToProps = (state) => ({
    datalogin: state.shop.datalogin,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Profile)