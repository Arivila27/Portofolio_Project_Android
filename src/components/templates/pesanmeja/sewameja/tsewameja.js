import React, {useState, useEffect} from 'react';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import {View,TouchableOpacity,SafeAreaView,StyleSheet,FlatList,Text} from 'react-native';
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
import Font14bold from '../../../atoms/font14bold';
import Font12regular from '../../../atoms/font12regular';
import Tombol1 from '../../../atoms/tombol1';
import MQTT from 'sp-react-native-mqtt';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const Tsewameja = (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    const [totalDuration, setTotalDuration] = useState(0);
        
        useEffect(() => {
            // Coundown timer for a given expiry date-time
            let date = 
            moment()
                .utcOffset('+05:30')
                .format('YYYY-MM-DD hh:mm:ss');
            
            // Getting the current date-time
            // You can set your own date-time
            let expirydate = '2022-09-17 04:00:45';
            
            let diffr = 
            moment
                .duration(moment(expirydate)
                .diff(moment(date)));
            // Difference of the expiry date-time
            var hours = parseInt(diffr.asHours());
            var minutes = parseInt(diffr.minutes());
            var seconds = parseInt(diffr.seconds());
        
            // Converting in seconds
            var d = hours * 60 * 60 + minutes * 60 + seconds;
        
            // Settign up the duration of countdown
            setTotalDuration(d);
        }, []);
    return (
    <View style={{marginHorizontal:15}}>
        <View style={{backgroundColor:myColor.putih, borderRadius:6,borderWidth:1,borderColor:myColor.inputan1,marginTop:15,padding:10}}>
            <View style={{alignItems:'center',justifyContent:'center',marginBottom:20}}> 
                <View style={{marginBottom:7}}>
                    <Font12mediumhitam text="Sisa Waktu"/>
                </View>
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                        React Native CountDown Timer | 
                        react-native-countdown-component
                        </Text>
                        <CountDown
                        until={totalDuration}
                        //duration of countdown in seconds
                        timetoShow={('H', 'M', 'S')}
                        //formate to show
                        onFinish={() => alert('finished')}
                        //on Finish call
                        onPress={() => alert('hello')}
                        //on Press call
                        size={20}
                        />
                    </View>
    </SafeAreaView>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                <Font12regular text="Nama Meja"/>
                <Font12mediumhitam text="Meja 01"/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}> 
                <Font12regular text="Atas Nama"/>
                <Font12mediumhitam text="Steven Hook Sterling"/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}> 
                <Font12regular text="Jam Mulai"/>
                <Font12mediumhitam text="16:00"/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}> 
                <Font12regular text="Jam Akhir"/>
                <Font12mediumhitam text="17:00"/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}> 
                <Font12regular text="Harga"/>
                <Font14bold text="Rp. 30.000"/>
            </View>
        </View>
        <View style={{marginTop:50,flexDirection:'row',justifyContent:'space-between'}}> 
            <TouchableOpacity style={{width:'40%',backgroundColor:'green',height:38,borderRadius:6,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${route.params.tableIot}/1`)
                  .then(function (response) {
                    console.log(response);
                    alert(`Berhasil Menghidupkan Lampu ${route.params.tableIot}`)

                  })
                  .catch(function (error) {
                    alert(`Gagal Menghidupkan Lampu ${route.params.tableIot}`)
                    console.log(error);
                  });
            }}>
                <Text style={{fontSize:14,fontFamily:'DMSans-Medium',color:myColor.putih}}>Nyalakan Lampu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'40%',backgroundColor:'red',height:38,borderRadius:6,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${route.params.tableIot}/2`)
                  .then(function (response) {
                    alert(`Berhasil Mematikan Lampu ${route.params.tableIot}`)
                    console.log(response);
                  })
                  .catch(function (error) {
                    alert(`Gagal Mematikan Lampu ${route.params.tableIot}`)
                    console.log(error);
                  });
            }}>
                <Text style={{fontSize:14,fontFamily:'DMSans-Medium',color:myColor.putih}}>Matikan Lampu</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:50, flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{width:'40%',backgroundColor:'orange',height:38,borderRadius:6,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
                axios.post(`https://api-internal.bitniaga.net.id/M_qqt/action/${route.params.tableIot}/3`)
                  .then(function (response) {
                    console.log(response);
                    alert(`Berhasil Menyalakan Alert ${route.params.tableIot}`)
                  })
                  .catch(function (error) {
                    console.log(error);
                    alert(`Gagal Menyalakan Alert ${route.params.tableIot}`)
                  });
            }}>
                <Text style={{fontSize:14,fontFamily:'DMSans-Medium',color:myColor.putih}}>Alert</Text>
            </TouchableOpacity>
        </View>
    </View>
   
    );
}
export default Tsewameja

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
  });