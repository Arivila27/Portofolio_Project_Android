import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';

const Stokkeluar = (props) => {
    const navigation = useNavigation();
    return (
    <View style={css.backgroundpageputih}>
        <ScrollView>
            
        </ScrollView>
    </View>
    );
}
export default Stokkeluar

