import React,{useState} from 'react'; 

import {View,TouchableOpacity,ToastAndroid} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { myColor } from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import Buttonbawahorange from '../../atoms/buttonbawahorange';
import Modal from "react-native-modal";
import Font12mediumputih from '../../atoms/font12mediumputih';
import ThermalPrinterModule from 'react-native-thermal-printer';
import Font14boldhitam from '../../atoms/font14boldhitam';


const Tsettingprinter = (props) => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibledua, setModalVisibledua] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    return (

    <View style={css.backgroundpageputih}>
         <Buttonbawahorange text="Pilih Jenis Printer" onPress={()=>{
            toggleModal()
         }}/>
        <Modal isVisible={isModalVisible}
            swipeDirection="left">
            <View style={{ flex: 1,justifyContent:'center'}}>
                <View style={{paddingHorizontal:20,width:'100%',borderRadius:10, paddingVertical:45,backgroundColor:myColor.putih}}>
                    <View style={{marginBottom:20}}>
                        <Font14boldhitam text="Pilih Jenis Printer"/>
                    </View>
                    <View style={{marginBottom:20}}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Tcetaknota")} style={css.tombol_full_2}>
                            <View style={{alignItems:'center'}}>
                                <Font12mediumputih text="Bluetooth"/>
                            </View>
                        </TouchableOpacity> 
                    </View>
                    <View style={{marginBottom:20}}>
                        <TouchableOpacity onPress={() => {
                            try {
                                 ThermalPrinterModule.printTcp({
                                  ip: '192.168.100.26',
                                  port: 9100,
                                  payload: 'hello world',
                                  printerWidthMM: 80,
                                  timeout: 80000, // in milliseconds (version >= 2.2.0)
                                });
                              } catch (err) {
                                //error handling
                                console.log(err.message);
                              }
                            }
                        } style={css.tombol_full_2}>
                            <View style={{alignItems:'center'}}>
                                <Font12mediumputih text="Wifi"/>
                            </View>
                        </TouchableOpacity> 
                    </View>
                    <TouchableOpacity style={css.tombol_full_100}
                            onPress={toggleModal}
                            >
                            <View style={{alignItems:'center'}}>
                                <Font12mediumputih text="Kembali"/>
                            </View>
                        </TouchableOpacity> 
                </View>

            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
            </View>
        </Modal>
    </View>
   
    );
}
export default Tsettingprinter

