import React ,{useEffect}from 'react'; 
import { myColor } from '../../assets/color';
import {TouchableOpacity, View} from 'react-native';
import Text from '../atoms/text';
import { css } from '../../assets/css/cssku';
import Tombol from '../atoms/tombol';
import { useDispatch, useSelector } from 'react-redux'
import { tambahCounter, kurangCounter} from '../../redux/action'


const Counter = (props) => {


    const dispatch =  useDispatch();
    const globalState = useSelector(data => data.reducerCounter)

    useEffect(()=>{
        const getData =()=>{
            console.log(globalState)
        }
        setTimeout(()=>{
            getData()   
        })
    })

    return (

        <View style={{ alignItems:'center', justifyContent:'center', flexDirection:'row' , backgroundColor:myColor.warna1,height:'100%'}}>
            <TouchableOpacity onPress={()=>dispatch(kurangCounter(globalState.counter))} style={{backgroundColor:'#DDDDDD' , paddingVertical:5, paddingHorizontal:20 , width:50,height:50, justifyContent:'center'}}>
                <Text text='-' style={css.font_tombol_1}></Text>
            </TouchableOpacity>

            <Text text={globalState.counter} style={css.font_tombol_3}></Text>

            <TouchableOpacity onPress={()=>dispatch(tambahCounter(globalState.counter))} style={{backgroundColor:'#DDDDDD' , paddingVertical:5, paddingHorizontal:20 , width:50,height:50, justifyContent:'center'}}>
                <Text text='+' style={css.font_tombol_1}></Text>
            </TouchableOpacity> 
        </View>
   
    );
}
export default Counter

