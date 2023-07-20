import React from 'react'; 
import {View,Text, Button} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { myColor } from '../../../assets/color';
import { Boarding,Datakaryawan,Datameja,Home,Login, Lupapin1, Lupapin2, Lupapin3, Register, Sewameja  } from '../../../pages';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createMaterialTopTabNavigator();


function MyTabs (){
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Datameja"
            tabBarOptions={{
                activeTintColor:myColor.tombol1,
                labelStyle:{
                    fontSize:12
                },
                style:{backgroundColor:myColor.warna2,marginTop: insets.top}

            }}
            >
            <Tab.Screen 
            name="Datameja"
            component={Datameja}
            options={{tabBarLabel:"Order Meja"}}
            />

        </Tab.Navigator>
    )
}

// const TopTabNavigator = (props) => {
//     const navigation = useNavigation();
    
//     return (
        
   
//     );
// }
// export default TopTabNavigator

export default function TopBarNavigator (){
    return(
        <NavigationContainer  independent={true}>
            <MyTabs/>
        </NavigationContainer>
    )
}