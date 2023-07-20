import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import Text from '../../atoms/text';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { myColor } from '../../../assets/color';
import moment from 'moment';
import Font12mediumhitam from '../../atoms/font12medium';
import { css } from '../../../assets/css/cssku';
import Ket1 from '../../atoms/ket1';

const Tanggalsekarang = (props) => {
    const tglku = moment(new Date()).format("DD MMMM YYYY")
   
    return (

    <View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{marginRight:5,justifyContent:'center'}}>
                <FontAwesomeIcon icon={faCheckCircle} color={myColor.hijau} size={10} />
            </View>
            <Ket1 text='Penjualan'/>
        </View>
        <View style={{marginTop:8}}>
            <Font12mediumhitam text={tglku}/>
        </View>
    </View>

    );
}
export default Tanggalsekarang

