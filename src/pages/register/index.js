import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tregister from '../../components/templates/tregister';


const Register = (props) => {
    return (
        
    <View style={css.backgroundpageputih}>
        <ScrollView>
            <Tregister/>
        </ScrollView>
    </View>
   
    );
}
export default Register

