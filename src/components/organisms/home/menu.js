import React ,{useState,useEffect} from 'react'; 
import {View,TouchableOpacity,ToastAndroid} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { myColor } from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12regular from '../../atoms/font12regular';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Font12regularcenter from '../../atoms/fon12regularcenter';

const Menu = (props) => {
    const navigation = useNavigation();
    const [dept, setDept] = useState('')


    const data = [
        {menuName:'Penjualan', menuIcon:'table', navigation:'Menupenjualan' ,status:true},
        {menuName:'Transaksi', menuIcon:'rocket', navigation:'Transaksi' ,status:true},
        {menuName:'MEJA Billiard', menuIcon:'table', navigation:'Mejakosong' ,status:true},
        {menuName:'Laporan Penjualan', menuIcon:'book', navigation:'Reportpenjualan' ,status:true},
        {menuName:'Closing Shift', menuIcon:'book', navigation:'Closingshift' ,status:true},
        {menuName:'Setting Printer', menuIcon:'print', navigation:'Settingprinter' ,status:true},
    ]

    //Server
    const datadua = [
        {menuName:'Penjualan', menuIcon:'table', navigation:'Menupenjualan' ,status:true}
    ]
    // Departemen Gudang
    const datatiga = [
        {menuName:'Data Barang', menuIcon:'table', navigation:'Databarang' ,status:true},
        {menuName:'STOK Masuk', menuIcon:'table', navigation:'Stokmasuk' ,status:true},
        {menuName:'STOK Keluar', menuIcon:'table', navigation:'Stokkeluar' ,status:true},
        {menuName:'Create PO', menuIcon:'table', navigation:'Createpo' ,status:true}
    ]

    useEffect(() => {
            const getData = async () => {
                const idnya2 = await AsyncStorage.getItem('DATALOGIN')
                const idnya = JSON.stringify(idnya2)
                let jsonObject = JSON.parse(idnya)
                
                var myObj = JSON.parse(jsonObject)
                console.log("data user KUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU" ,myObj.userDept)
                setDept(myObj.userDept)
                
            //   dispatch(updateDataMakanan(datamakanan))
            }
    
        setTimeout(() => {
        getData()
        
        }, )
    }, [dept])
    function renderConversations() {
        let conversationContent = data.map((convObj, i) => {
          return  <TouchableOpacity key={i} 
                        style={css.menuContainer} 
                        onPress={()=> {
                            if(convObj.status === true){
                                navigation.navigate(convObj.navigation)
                            }else{
                                ToastAndroid.show(`Cooming Soon`,ToastAndroid.LONG)
                            }
                            }}>
                        <View style={css.menuIcon}>
                            <Icon name={convObj.menuIcon} size={40} color={myColor.warna1} />
                        </View >
                        <View style={{alignItems:'center'}}>
                            <Font12regularcenter text={convObj.menuName}/>
                        </View>
                    </TouchableOpacity>                       
        })
        return conversationContent
      }
      function renderConversationsdua() {
        let conversationContent = datadua.map((convObj, i) => {
          return  <TouchableOpacity key={i} 
                        style={css.menuContainer} 
                        onPress={()=> {
                            if(convObj.status === true){
                                navigation.navigate(convObj.navigation)
                            }else{
                                ToastAndroid.show(`Cooming Soon`,ToastAndroid.LONG)
                            }
                            }}>
                        <View style={css.menuIcon}>
                            <Icon name={convObj.menuIcon} size={40} color={myColor.warna1} />
                        </View >
                        <View style={{alignItems:'center'}}>
                            <Font12regularcenter text={convObj.menuName}/>
                        </View>
                    </TouchableOpacity>                       
        })
        return conversationContent
      }

      function renderConversationstiga() {
        let conversationContent = datatiga.map((convObj, i) => {
          return  <TouchableOpacity key={i} 
                        style={css.menuContainer} 
                        onPress={()=> {
                            if(convObj.status === true){
                                navigation.navigate(convObj.navigation)
                            }else{
                                ToastAndroid.show(`Cooming Soon`,ToastAndroid.LONG)
                            }
                            }}>
                        <View style={css.menuIcon}>
                            <Icon name={convObj.menuIcon} size={40} color={myColor.warna1} />
                        </View >
                        <View style={{alignItems:'center'}}>
                            <Font12regularcenter text={convObj.menuName}/>
                        </View>
                    </TouchableOpacity>                       
        })
        return conversationContent
      }

      
    return (
        
    <View>
        {dept==='63788bb470b46eda6641e00b' ? 
         <>
         {
            <View style={css.menuGrid3}>
                {renderConversationsdua()}
            </View>
        }
         </>
         : dept === '6387112ad9befc5bd1d2da6b' ?
            <>
            {
                 datatiga.length % 3 === 0 ?
                 <View style={css.menuGrid3}>
                     {renderConversationstiga()}
                 </View>
                 :datatiga.length % 3 === 1 ?
                 <View style={css.menuGrid3}>
                     {renderConversationstiga()}
                     <TouchableOpacity style={css.menuContainerkosong}/>
                 </View>
                 :datatiga.length % 3 === 2 ?
                 <View style={css.menuGrid3}>
                     {renderConversationstiga()}
                     <TouchableOpacity style={css.menuContainerkosong}/>
                     <TouchableOpacity style={css.menuContainerkosong}/>
                 </View>
                 :null
            }
            </>

         :
         <>
         {
            data.length % 3 === 0 ?
            <View style={css.menuGrid3}>
                {renderConversations()}
            </View>
            :data.length % 3 === 1 ?
            <View style={css.menuGrid3}>
                {renderConversations()}
                <TouchableOpacity style={css.menuContainerkosong}/>
            </View>
            :data.length % 3 === 2 ?
            <View style={css.menuGrid3}>
                {renderConversations()}
                <TouchableOpacity style={css.menuContainerkosong}/>
                <TouchableOpacity style={css.menuContainerkosong}/>
            </View>
            :null
        }
         </>
        }

    </View>
   
    );
}
export default Menu

