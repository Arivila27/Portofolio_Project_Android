import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Tlupapin2 from '../../components/templates/tlupapin2';

const Lupapin2 = (props) => {
    const navigation = useNavigation();
    return (
        
    <View style={css.backgroundpageputih}>
        <ScrollView>
           <Tlupapin2/>
        </ScrollView>
    </View>
   
    );
}
export default Lupapin2

