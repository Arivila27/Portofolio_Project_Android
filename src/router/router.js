import React ,{useEffect}from 'react'; 


import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding,Cetakbill,Tcetaknota,Cetaknota,Datakaryawan,Datameja,Detaillisttransaksi,Detailpesanan,Home,Transaksi,Listtransaksi,Login, Lupapin1, Lupapin2, Lupapin3, Menupenjualan, Pembayaran, Pembayaranselesai, Pembayarantunai, Pilihmeja, Pilipelanggan, Products, Register, Settingprinter, Sewameja, Ubahpesanan, Reportpenjualan, Cetaknotareport, Updatemeja, Pendapatan, Profile, Searchitem, Closingshift, Mejakosong, Createpo, Databarang, Stokkeluar, Stokmasuk } from '../pages';
import { AuthContext } from '../config/context';
import { myColor } from '../assets/color';
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigationPush } from '../utils/navigationMethods';
import Font14boldputih from '../components/atoms/font14boldputih';
import Carticon from '../components/organisms/products/carticon';
import Iconhome from '../components/organisms/cetaknota/iconhome/iconhome';
import Iconupdatemeja from '../components/organisms/updatemeja/iconupdatemeja';
import Searchitemicon from '../components/organisms/products/searchitemicon';



export const navigateRef = createNavigationContainerRef();

const Router = (props) => {

const Stack = createNativeStackNavigator();

// const dispatch =  useDispatch();

// const globalState = useSelector(data => data.reducerLogin)
// useEffect(()=>{
//     const getData =()=>{
//         console.log("APA SIH ",globalState)
//     }
//     setTimeout(()=>{
//         getData()   
//     })
// })


// const authContext = React.useMemo(()=> ({
//     lanjutUp: async() =>{  
//       dispatch({ type : 'LANJUT' })
//     },

//      signIn :async (userName ,password) => { 
//       let userToken;
//         userToken = 'dfsfsfs';
//         try{ 
//            await AsyncStorage.setItem('userToken',userToken)
//          } catch(e){ 
//            console.log(e)
//           }
//        console.log('userToken ', userToken)
//        dispatch({ type : 'LOGIN', id: userName , token: userToken })
//       },
//      signOut : async() => { 
//       try {
//         await AsyncStorage.removeItem('userToken')
        
//       } catch (e) {
//          console.log(e)
//       }

//       dispatch({ type : 'LOGOUT' })
//       },
//      signUp:async (userName) =>{  
//       let userToken;
//       userToken = 'dfsfsfs';
//       try{ 
//          await AsyncStorage.setItem('userToken',userToken)
//        } catch(e){ 
//          console.log(e)
//         }
//      console.log('userToken ', userToken)
//      dispatch({ type : 'REGISTER', id: userName , token: userToken }) 
//      },
     
//    }),[]);
const  initialLoginState =  { 
    isLoading:true,
    userName:null,
    userToken:null
   };

   const loginReducer = ( prevState, action) => { 
     switch (action.type) {
       case 'RETRIEVE_TOKEN':
          return { 
            ...prevState,
            userToken: action.token,
            isLoading:false,
          };
       case 'LOGIN':
          return { 
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading:false,
          };

       case 'LOGOUT':
          return { 
            ...prevState,
              userName:null,
              userToken:null,
              isLoading:false,
          };
       case 'REGISTER':
          return { 
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading:false,
          };  
          
          case 'LANJUT':
          return { 
            ...prevState,
              userName:null,
              userToken:null,
              isLoading:false,
          };
     }
    };

  const [ loginState , dispatch ] = React.useReducer( loginReducer, initialLoginState) 

   const authContext = React.useMemo(()=> ({


    lanjutUp: async() =>{  
      dispatch({ type : 'LANJUT' })
    },

    signIn :async (userName ,password) => { 
        let userToken;
          userToken = 'dfsfsfs';
          try{ 
             await AsyncStorage.setItem('userToken',userToken)
           } catch(e){ 
             console.log(e)
            }
        //  console.log('userToken ', userToken)
         dispatch({ type : 'LOGIN', id: userName , token: userToken })
        },
     signOut : async() => { 
      //  setUserToken(null)
      //  setIsLoading(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
         console.log(e)
      }

      dispatch({ type : 'LOGOUT' })
      },
     signUp:async (userName) =>{  
      let userToken;
      userToken = 'dfsfsfs';
      try{ 
         await AsyncStorage.setItem('userToken',userToken)
       } catch(e){ 
         console.log(e)
        }
    //  console.log('userToken ', userToken)
     dispatch({ type : 'REGISTER', id: userName , token: userToken }) 
     },
     
   }),[]);



    useEffect(() => {
      setTimeout(async()=> {
        let userToken;
        userToken = null;
        try {
          userToken =  await AsyncStorage.getItem('userToken')
        } catch (e) {
          console.log(e)
        }
        dispatch({ type : 'REGISTER',  token: userToken })
        
      },0)
   
    }, [])

    // console.log('hmmmm loading',loginState.isLoading)
    // console.log('hmmmm222 usertoken',loginState.userToken)


    return (
        <AuthContext.Provider value={ authContext } >
            <NavigationContainer ref={navigateRef}>
            { loginState.userToken !== null ?
                <Stack.Navigator initialRouteName={Home}>
                     <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{
                            headerShown: false,
                            title: 'Home',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    /> 
                    {/* <Stack.Screen 
                        name="Boarding" 
                        component={Boarding} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/> */}
                       
                    <Stack.Screen 
                        name="Lupapin1" 
                        component={Lupapin1} 
                        options={{
                            title: '',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Stack.Screen 
                        name="Lupapin2" 
                        component={Lupapin2} 
                        options={{
                            title: '',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    /> 
                    <Stack.Screen 
                        name="Lupapin3" 
                        component={Lupapin3} 
                        options={{
                            title: '',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    />
                    <Stack.Screen 
                        name="Datakaryawan" 
                        component={Datakaryawan} 
                        options={{
                            title: 'Data Karyawan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'center',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Datameja" 
                        component={Datameja} 
                        options={{
                            title: 'Data Meja Billiard',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'center',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Pilihmeja" 
                        component={Pilihmeja} 
                        options={{
                            title: 'Data Meja Makan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <Iconupdatemeja/>
                            )
                            
                        }}
                    />
                    <Stack.Screen 
                        name="Searchitem" 
                        component={Searchitem} 
                        options={{
                            headerTitle: "",
                            headerTransparent: true,
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <Searchitemicon/>
                            )
                            
                        }}
                    />
                    <Stack.Screen 
                        name="Updatemeja" 
                        component={Updatemeja} 
                        options={{
                            title: 'Update Data Meja Makan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                           
                            
                        }}
                    />
                    <Stack.Screen 
                        name="Reportpenjualan" 
                        component={Reportpenjualan} 
                        options={{
                            title: 'Laporan Penjualan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 

                    <Stack.Screen 
                        name="Createpo" 
                        component={Createpo} 
                        options={{
                            title: 'Create PO',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Databarang" 
                        component={Databarang} 
                        options={{
                            title: 'Data Barang',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 

                    <Stack.Screen 
                        name="Stokmasuk" 
                        component={Stokmasuk} 
                        options={{
                            title: 'Stok Masuk',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Stokkeluar" 
                        component={Stokkeluar} 
                        options={{
                            title: 'Stokkeluar',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 

                    <Stack.Screen 
                        name="Transaksi" 
                        component={Transaksi} 
                        options={{
                            title: 'Transaksi Berjalan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Closingshift" 
                        component={Closingshift} 
                        options={{
                            title: 'Closing / Shift',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    {/* <Stack.Screen 
                        name="Transaksi" 
                        component={Transaksi} 
                        options={{
                            title: 'Transaksi Berjalan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    />  */}
                    <Stack.Screen 
                        name="Pilihpelanggan" 
                        component={Pilipelanggan} 
                        options={{
                            title: 'Data Pelanggan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                     <Stack.Screen 
                        name="Settingprinter" 
                        component={Settingprinter} 
                        options={{
                            title: 'Setting Printer',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    <Stack.Screen 
                        name="Sewameja" 
                        component={Sewameja} 
                        options={{
                            title: 'Detail Meja',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'center',
                            
                        }}
                    /> 

                    <Stack.Screen 
                        name="Products" 
                        component={Products} 
                        options={{
                            title: 'PRODUCT ',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'center',
                            headerRight: () => (
                               <Carticon/>
                            )
                        }}
                    /> 
                    <Stack.Screen 
                        name="Listtransaksi" 
                        component={Listtransaksi} 
                        options={{
                            title: 'Transaksi Tersimpan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Mejakosong" 
                        component={Mejakosong} 
                        options={{
                            title: 'Meja Billiard Ready',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                     <Stack.Screen 
                        name="Pendapatan" 
                        component={Pendapatan} 
                        options={{
                            title: 'Pendapatan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Cetakbill" 
                        component={Cetakbill} 
                        options={{
                            title: 'Print Bill',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Pembayaran" 
                        component={Pembayaran} 
                        options={{
                            title: 'Pembayaran',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                     <Stack.Screen 
                        name="Profile" 
                        component={Profile} 
                        options={{
                            title: 'Profile',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                     <Stack.Screen 
                        name="Pembayarantunai" 
                        component={Pembayarantunai} 
                        options={{
                            title: 'Pembayaran',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Pembayaranselesai" 
                        component={Pembayaranselesai} 
                        options={{
                            headerBackVisible: false,
                            title: 'Pembayaran',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <Iconhome/>
                            )
                        }}
                    /> 
                     <Stack.Screen 
                        name="Cetaknota" 
                        component={Cetaknota} 
                        options={{
                            headerBackVisible: false,
                            title: 'Cetak Nota',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <Iconhome/>
                            )
                        }}
                    /> 
                    <Stack.Screen 
                        name="Detaillisttransaksi" 
                        component={Detaillisttransaksi} 
                        options={{
                            title: 'Transaksi Tersimpan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Menupenjualan" 
                        component={Menupenjualan} 
                        options={{
                            title: 'Penjualan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            headerRight: () => (
                                <Carticon/>
                            )
                        }}
                    />
                    <Stack.Screen 
                        name="Tcetaknota" 
                        component={Tcetaknota} 
                        options={{
                            title: 'Cetak Nota',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff'
                        }}
                    />
                    <Stack.Screen 
                        name="Cetaknotareport" 
                        component={Cetaknotareport} 
                        options={{
                            title: 'Cetak Nota',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff'
                        }}
                    />
                    
                    <Stack.Screen 
                        name="Detailpesanan" 
                        component={Detailpesanan} 
                        options={{
                            title: 'Detail Pesanan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                        }}
                    /> 
                    <Stack.Screen 
                        name="Ubahpesanan" 
                        component={Ubahpesanan} 
                        options={{
                            title: 'Ubah Pesanan',
                            statusBarColor:myColor.warna1,
                            headerTitleAlign: 'left',
                            headerStyle:{
                                backgroundColor:myColor.warna1
                            },
                            headerTintColor: '#fff',
                            
                        }}
                    /> 
                    {/* <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            title: 'Login',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    />  */}
                    
                </Stack.Navigator>
                :
                <Stack.Navigator initialRouteName={Boarding}>
                <Stack.Screen 
                    name="Boarding" 
                    component={Boarding} 
                    options={{
                        headerShown: false,
                        // statusBarStyle:'light'
                        statusBarTranslucent:true
                    }}/>
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{
                        title: 'Login',
                        statusBarColor:myColor.warna1,
                        // headerTintColor: '#fff',
                        headerStyle: {
                        borderWidth:1,
                        borderRadius:20,
                        marginTop:50
                        },
                        headerTitleStyle: {
                        justifyContent: 'center',
                        alignSelf:'center'
                        },
                        headerTitleAlign: 'center'
                    }}
                /> 
                <Stack.Screen 
                        name="Register" 
                        component={Register} 
                        options={{
                            title: 'REGISTER',
                            statusBarColor:myColor.warna1,
                            // headerTintColor: '#fff',
                            headerStyle: {
                            borderWidth:1,
                            borderRadius:20,
                            marginTop:50
                            },
                            headerTitleStyle: {
                            justifyContent: 'center',
                            alignSelf:'center'
                            },
                            headerTitleAlign: 'center'
                        }}
                    /> 
                </Stack.Navigator>
            }
            </NavigationContainer>
        </AuthContext.Provider>
   
    );
}
export default Router

