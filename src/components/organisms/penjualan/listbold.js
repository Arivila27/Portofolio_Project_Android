import React from 'react'; 
import {View,TouchableOpacity,FlatList,Dimensions,Image} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { myColor } from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12regular from '../../atoms/font12regular';
import Font12regularcenter from '../../atoms/fon12regularcenter';
import Font16mediumhitam from '../../atoms/font16mediumhitam';
import Font16bregularhitam from '../../atoms/font16regularhitam';
import Font14mediumhitam from '../../atoms/font14mediumhitam';
import Font16boldhitam from '../../atoms/font16boldhitam';

const Listbold = (props) => {
    const navigation = useNavigation();
   
    return (
        
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
            <Font14mediumhitam text={props.keys}/>
            <Font16boldhitam text={props.value}/>
        </View>
   
    );
}
export default Listbold



