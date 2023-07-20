import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Tlupapin1 from '../../components/templates/tlupapin1';

const Lupapin1 = (props) => {
    const navigation = useNavigation();
    return (
        
    <View style={css.backgroundpageputih}>
        <ScrollView>
            <Tlupapin1/>
        </ScrollView>
    </View>
   
    );
}
export default Lupapin1

