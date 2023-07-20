import React, { useState ,useEffect} from 'react'; 

import {View,TouchableOpacity,FlatList,StyleSheet,Text} from 'react-native';
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
import Font24boldputih from '../../../atoms/font24boldputih';
import Font12regularputih from '../../../atoms/font12regularputih';
import Font14boldputih from '../../../atoms/font14boldputih';
import { useDispatch,useSelector } from 'react-redux'
import { addTable ,addPelanggan,addWaiters} from '../../../../redux/shopping/shoppingaction';
import Inputan from '../../../atoms/inputan';


const Tpilihpelanggan = (props) => {
    const dispatch= useDispatch();
    const navigation = useNavigation();
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [meja, setMeja] = useState('')
    const [nama, setNama] = useState(null);
    const [waiters, setWaiters] = useState(null);

    const namanya = (newText) => {
        console.log("ISI EMAIL ",newText);
        setNama(newText)
    }
    const waitersnya = (newText) => {
        console.log("ISI EMAIL ",newText);
        setWaiters(newText)
    }

    return (
        <View style={{paddingHorizontal:10,paddingTop:10,flex:1}}>
            <Inputan 
                    onChangeText={namanya}
                    value={nama}
                    placeholder='Nama Pelanggan' 
                    keyboardType='default'
                    secureTextEntry={false}/>
            <Inputan 
                    onChangeText={waitersnya}
                    value={waiters}
                    placeholder='Nama Waiters' 
                    keyboardType='default'
                    secureTextEntry={false}/>
                {
                nama !== null && waiters !==null?
                <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Menupenjualan')
                        dispatch(addPelanggan({nama:nama}))
                        dispatch(addWaiters({waiters:waiters}))
                    }}
                    style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Font14boldputih text="Simpan"/>
                    </TouchableOpacity>
                </View>
                :null

            }
        </View>
   
    );
}
export default Tpilihpelanggan
