import React from 'react'; 
import { myColor } from '../../assets/color';
import {View} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';
import Tombol from '../atoms/tombol';
import { useNavigation } from '@react-navigation/native';

const 
Judulform = (props) => {
    const navigation = useNavigation();
    
    return (
        <View style={css.stylejudul}>
            <View style={css.marginjudul}>
                <Text style={css.font_judul_1}  text='Rio Billiard'/>
                <Text style={css.font_judul_1}  text='And Bistro'/> 
            </View>
            <View>
                <View style={css.jaraktombol}>
                    <Tombol style={css.tombol_full_1} stylefont={css.font_tombol_1} text='Masuk' onPress={() => navigation.navigate('Login')}/>
                </View>
            </View>
        </View>
   
    );
}
export default Judulform

