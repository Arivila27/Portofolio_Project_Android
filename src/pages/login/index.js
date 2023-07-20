import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
    const navigation = useNavigation();
    return (
    <View style={css.backgroundpageputih}>
        <ScrollView>
            <Tlogin></Tlogin>
        </ScrollView>
        {/* <View style={css.bawahtengah}>
            <Tomboltext style={css.font_ket} text='Lupa Pin ?'onPress={() => navigation.navigate('Lupapin1')}/>
        </View> */}
    </View>
    );
}
export default Login

