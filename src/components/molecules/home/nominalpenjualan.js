import React , {useEffect, useState} from 'react'; 

import {View,StyleSheet,ToastAndroid, TouchableOpacity} from 'react-native';
import Text from '../../atoms/text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { myColor } from '../../../assets/color';
import Font12mediumhitam from '../../atoms/font12medium';
import { css } from '../../../assets/css/cssku';
import { myApi } from '../../../config/service/api';
import axios from 'axios';
import moment from 'moment';
import Ket1 from '../../atoms/ket1';
import Font14bold from '../../atoms/font14bold';
import numberFormat from '../../../utils/numberFormat';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Nominalpenjualan = ({cart,statusku,datalogin,...props}) => {
   const navigation = useNavigation();
    const [total , setTotal] = useState(0)
    const [diskon , setDiskon] = useState(0)
    const [ppn , setPpn] = useState(0)


    // const tglku = moment(new Date()).format("DD-MM-YYYY")
    useEffect(() => {
        const getData = async () => {
            axios.get(`${myApi.URL}/transjual/TotalTransbyDate/${props.tglku.toString()}`,{
            }).then(response =>{
                setTotal(response.data.Total)
                setDiskon(response.data.totDiskon)
                setPpn(response.data.totalPPN)
                // console.log("COOOOOOOOOOOOOOOOOOKKKKKKKKKKKKKKKKKKKKK",response.data.Total)
            }).catch(error => {
                console.log('APA INI',error)
                ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
            })
        }
    setTimeout(() => {
      getData()
      
    }, )
  }, [statusku])

    return (
        <TouchableOpacity 
        //  onPress={()=>{navigation.navigate("Pendapatan")}}
         style={{flexDirection:'row'}}>
            <View style={{marginRight:5,justifyContent:'center'}}>
                <Font14bold text={numberFormat((total + ppn) - diskon)}/>
            </View>
            <View style={{justifyContent:'center'}}>
                <FontAwesomeIcon icon={faAngleRight} color={myColor.inputan1} size={16} />
            </View>
        </TouchableOpacity>

    );
}

const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    statusku: state.shop.statusku,
    datalogin: state.shop.datalogin,

});


export default connect(mapStateToProps)(Nominalpenjualan)

