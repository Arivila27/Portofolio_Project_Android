import React, { useState ,useEffect} from 'react'; 

import {ToastAndroid, View,TouchableOpacity,FlatList,StyleSheet,Text, Alert} from 'react-native';
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
import Font24boldorange from '../../../atoms/font24boldorange';
import Font12regular from '../../../atoms/font12regular';

import { connect, useDispatch,useSelector } from 'react-redux'
import axios from 'axios';
import { myApi } from '../../../../config/service/api';
import Font24boldputih from '../../../atoms/font24boldputih';
import { addStatus } from '../../../../redux/shopping/shoppingaction';

const Tupdatemeja = ({ statusku, token,...props}) => {
    const dispatch= useDispatch();
    const navigation = useNavigation();
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [meja, setMeja] = useState('')
    const [datameja ,setDatameja]= useState ([])
    useEffect(() => {
        axios.get(`${myApi.URL}/mejas/listmejaAll`)
        .then(response =>{
        //    console.log("RESPONSE API TPILIHMEJA",response.data)
           setDatameja(response.data)                
       }).catch(error => {
           // console.log('Ini Eror 2',error)
           // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
       })  
    }, []);

    const _renderAlphabet = ( {item,itemku} ) => {
        // console.log("hmm",itemku.mejaStatus)
        // console.log(item);
        // console.log(itemku);
        return (
                        <TouchableOpacity onPress={() => { 
                            // console.log("Jancok ", itemku)
                            if(itemku.mejaStatus === 'no'){
                            setSelectedLetter(item);
                            setMeja(itemku)
                            }else{
                                axios.patch(`${myApi.URL}/mejas/updatemeja/${itemku._id}`,{
                                    mejaStatus: "no"
                                },{
                                    headers:{
                                        'auth-token':token
                                    }

                                }).then(response =>{
                                    console.log('BISA APAA')
                                    console.log("RESPON API JOSS",response.data)
                                    Alert.alert(  
                                        'Berhasil',  
                                        `Open Meja Makan No ${itemku.mejaNumber}`,  
                                        [  
                      
                                            {text: 'OK', onPress: () => {
                                                dispatch(addStatus(!statusku))
                                                navigation.navigate("Pilihmeja")
                                            }},  
                                        ]  
                                    );  
                                }).catch(error => {
                                    console.log('Ini Eror',error)
                                }) 
                            }
                        }}
   
                            style={
                                itemku.mejaStatus === 'no' ?
                                item === selectedLetter ? css.menuContainer4orange : css.menuContainer4
                                :
                                css.menuContainer4merah
                            }>

                            {

                                itemku.mejaStatus === 'no' ?

                                item === selectedLetter ?
                                <>
                                    <Font24boldputih text={itemku.mejaNumber}/>
                                </>
                                    :
                                <>
                                    <Font24boldorange text={itemku.mejaNumber}/>
                                </>

                                :
                                <Font24boldputih text={itemku.mejaNumber}/>
                            }
                            
                        </TouchableOpacity>  
          
        )
    }



    return (
        <View style={{paddingHorizontal:10,paddingTop:10,flex:1}}>
            <FlatList
                   keyExtractor={item => item._id}
                   contentContainerStyle={{ paddingBottom: 10}}
                   numColumns='4'
                   columnWrapperStyle={{justifyContent: 'space-between'}}  
                    data={datameja}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index}) =>
                    _renderAlphabet({item: item._id,itemku:item})
                }
            />
            
        </View>
   
    );
}

const mapStateToProps = (state) => ({
    statusku: state.shop.statusku,
    token: state.shop.token,
});

export default connect(mapStateToProps)(Tupdatemeja)
const styles = StyleSheet.create({
    
    alphabetContainer: {
        width: 24,
        height: 24,
        marginLeft: 14,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    alphabetContainerSelected: {
        width: 24,
        height: 24,
        marginLeft: 14,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    
});
