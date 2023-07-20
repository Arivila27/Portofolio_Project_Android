import React from 'react'; 

import {View,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { css } from '../../assets/css/cssku';
import Tlogin from '../../components/templates/tlogin';
import Tomboltext from '../../components/atoms/tomboltext';
import { useNavigation } from '@react-navigation/native';
import Tsettingprinter from '../../components/templates/settingprinter/tsettingprinter';

const Settingprinter = (props) => {
    const navigation = useNavigation();
    return (
        <Tsettingprinter/>
    );
}
export default Settingprinter

