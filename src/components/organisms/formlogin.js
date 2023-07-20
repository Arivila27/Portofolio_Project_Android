import React ,{useState} from 'react'; 
import { myColor } from '../../assets/color';
import {View,ToastAndroid,Keyboard} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';
import Tombol from '../atoms/tombol';
import Tombol1 from '../atoms/tombol1';
import Inputan from '../atoms/inputan';
import Tomboltext from '../atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AuthContext } from '../../config/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { myApi } from '../../config/service/api'
import { useDispatch } from 'react-redux';
import { addDataLogin, addToken } from '../../redux/shopping/shoppingaction';

const storeDataJson = async (value) => {
    try {
      await AsyncStorage.setItem('DATALOGIN', JSON.stringify(value))
    //   console.log('berhasil menyimpan data login',JSON.stringify(value))
    } catch (e) {
      // saving error
    }
}



const Formlogin = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [eye, setEye] = useState(false);
    const [visible, setVisible] = useState(true);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailnya = (newText) => {
        // console.log("ISI EMAIL ",newText);
        setEmail(newText)
    }

    const passwordnya = (newText) => {
        // console.log("ISI PAss ",newText);
        setPassword(newText)
    }

    const { signIn } = React.useContext(AuthContext)

    const loginHandle = (idnya,tokennya)=> {
        // console.log("tokennya formLogin",tokennya)
        dispatch(addToken(tokennya))
        signIn(idnya,tokennya)
    }
    return (
        <View>
            <View style={css.jarakform}>
                <Inputan 
                    onChangeText={emailnya}
                    value={email}
                    placeholder='email' 
                    keyboardType='default'
                    secureTextEntry={false}/>
            </View>
            <View style={css.jarakform}>
                <Inputan
                    onChangeText={passwordnya} 
                    value={password} 
                    placeholder='Password'
                    keyboardType='password' 
                    secureTextEntry={true}/>
            </View>
                <Tombol1 text='MASUK' 
                 onPress={()=>{
                    Keyboard.dismiss()
                    if (email == "") {
                        ToastAndroid.show('Masukkan Email',
                            ToastAndroid.LONG)
                    } else {
                        // loginHandle()
                        // console.log('asataga masyaallah')
                        // console.log(email)
                        console.log(`${myApi.URL}/users/signIn`)
                        axios.post(`${myApi.URL}/users/signIn`,{
                            userEmail:email,
                            userPassword:password
                        }).then(response =>{
                            // console.log('BISA')
                            // console.log(response.status)
                            // console.log(response.code)
                            if(response.status === 200){
                                // console.log('hhhhhhhhhhhhhhh bisa login')
                                 //console.log("hhhhhhhhhhhhhhhhhhhhhhh",response.data)
                                    setIsLoading(false)
                                    storeDataJson(response.data)
                                    dispatch(addDataLogin(response.data))
                                    loginHandle(response.data._id,response.data.userToken)
                            }else if(response.data = "Invalid Credentials"){
                                ToastAndroid.show(`${response.data.token}`,ToastAndroid.LONG)
                                setIsLoading(false)
                                ToastAndroid.show(`Cek Email / Password`,ToastAndroid.LONG)
                            }
                        }).catch(error => {
                            console.log("ERRORR ",error)
                            if (error.response.status == 400) {
                                ToastAndroid.show(`Cek Email / Password`,ToastAndroid.LONG)
                                setIsLoading(false)
                              }else{
                                  ToastAndroid.show(`Cek Koneksi Internet Anda`,ToastAndroid.LONG)
                                  setIsLoading(false)
                              }

                        })
                    } 
                }} 
                />
        </View>
   
    );
}
export default Formlogin

