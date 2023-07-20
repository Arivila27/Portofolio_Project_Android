import React from 'react'; 

import {View,StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../config/context'
import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Thome from '../../components/templates/thome';
import Font14mediumhitam from '../../components/atoms/font14mediumhitam';
import Font14boldputih from '../../components/atoms/font14boldputih';
import { myColor } from '../../assets/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = (props) => {
    const navigation = useNavigation();

    const { signOut } = React.useContext(AuthContext)
    const logoutHandle =async ()=> {
        signOut()
     }
     const  removeItemValue = async(key)=> {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
            return false;
        }
    }
    return (
        
    <View style={css.backgroundpageputih}>
        <ScrollView>
            <Thome/>
        </ScrollView>
    
        {/* <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
            <TouchableOpacity 
                onPress={()=>{
                    removeItemValue('DATALOGIN')
                    logoutHandle()
                    }} 
                style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Font14boldputih text="Log Out"/>
            </TouchableOpacity>
        </View> */}
    </View>
    );
}
export default Home

