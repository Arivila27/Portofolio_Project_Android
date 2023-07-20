import React from 'react'; 

import {View,StyleSheet, ScrollView} from 'react-native';

import { css } from '../../assets/css/cssku';
import Onboarding from '../../components/templates/onboarding';
import Counter from '../../components/organisms/counter';
const Boarding = (props ) => {
    return (
    <View>
        <ScrollView>
            <Onboarding></Onboarding>
        </ScrollView>
    </View>
   
    );
}
export default Boarding

