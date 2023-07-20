import React from 'react'; 
import { myColor } from '../../assets/color';
import {View} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';
import Tombol from '../atoms/tombol';
import Tombol1 from '../atoms/tombol1';
import Inputan from '../atoms/inputan';
import Subjudul from '../atoms/subjudul';
import Garis from '../atoms/garis';
const Formregister = (props) => {
    return (
        <View>
            <View style={css.marginContent}>
                <View style={{marginTop:40}}>
                    <View style={css.jaraksubjudulform}>
                        <Subjudul text='Data Usaha'/>
                    </View>
                </View>
                <View style={css.jarakform10}>
                    <Inputan 
                        placeholder='Nama Usaha' 
                        keyboardType='default'
                        secureTextEntry={false}/>
                </View>
                    <Inputan 
                        placeholder='Jenis Usaha'
                        keyboardType='password' 
                        secureTextEntry={true}/>
            </View>

            <Garis/>

            <View style={css.marginContent}>
                <View style={css.jaraksubjudulform}>
                        <Subjudul text='Data Pemilik'/>
                </View>
                <View style={css.jarakform10}>
                    <Inputan 
                        placeholder='Nama Lengkap' 
                        keyboardType='default'
                        secureTextEntry={false}/>
                </View>
                <View style={css.jarakform10}>
                    <Inputan 
                        placeholder='Nomor Hp' 
                        keyboardType='phone-pad'
                        secureTextEntry={false}/>
                </View>
                <View style={css.jarakform10}>
                    <Inputan 
                        placeholder='Email' 
                        keyboardType='email-address'
                        secureTextEntry={false}/>
                </View>

                <View style={css.jarakform10}>
                    <Inputan 
                        placeholder='PIN (6 digit)' 
                        keyboardType='numerics'
                        secureTextEntry={true}/>
                </View>
                <View style={css.mt30}>
                    <Tombol1 text='DAFTAR'/>
                </View>
            </View>
        </View>
   
    );
}
export default Formregister

