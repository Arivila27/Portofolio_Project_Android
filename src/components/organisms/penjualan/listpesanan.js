import React, {useState,useEffect} from  'react'; 
import {View,TouchableOpacity,FlatList,Dimensions,Image} from 'react-native';
import { css } from '../../../assets/css/cssku';
import { myColor } from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { myApi } from '../../../config/service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font12regular from '../../atoms/font12regular';
import Font12regularcenter from '../../atoms/fon12regularcenter';
import Font16mediumhitam from '../../atoms/font16mediumhitam';
import Font16bregularhitam from '../../atoms/font16regularhitam';
import Font14mediumhitam from '../../atoms/font14mediumhitam';
import { connect } from 'react-redux';
import numberFormat from '../../../utils/numberFormat';
import moment from 'moment';

const Listpesanan = ({loadCurrentItem,...props}) => {

    const navigation = useNavigation();
    const [jumlah,setJumlah] = useState(0);
    const [siang, setSiang] = useState(0);
    const [malam, setMalam] = useState(0);

    useEffect(() => {  
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        axios.get(`${myApi.URL}/items/listItemAllbyCat/TMEJATRANS`)
            .then(response=>{
            setSiang(response.data[0].itemPrice)
            setMalam(response.data[1].itemPrice)
            if(isDayTime===true){
                setJumlah(response.data[0].itemPrice)
            }else{
                setJumlah(response.data[1].itemPrice)
            }
            }).catch(error => {
            setIsLoading(false)
            // console.log('Ini Eror 2',error)
            // ToastAndroid.show(`Server Bermasalah`,ToastAndroid.LONG)
        })
    },[]);


    

    return (
        <TouchableOpacity onPress={props.onPress}
            style={{paddingRight:15, flex:1, marginHorizontal:20, justifyContent:'space-between',alignItems:'center', flexDirection:'row',borderBottomWidth:1,marginRight:5,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderRightWidth:1,paddingVertical:8, borderColor: "thistle"}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image
                    resizeMode='contain'
                    style={{height:75, width:91,borderRadius:10}}
                    source={{uri:props.image}}
                />
                <View style={{marginLeft:9,width:180}}>
                    <View style={{flexWrap:'wrap',width:'80%'}}>
                        <Font14mediumhitam text={props.itemNama}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <View>

                            {
                                props.itemCategory === "MEJA" ?
                                <Font16bregularhitam text={numberFormat(jumlah)}/>
                                :
                                <Font16bregularhitam text={numberFormat(props.itemHarga)}/>

                            }
                        </View>
                        <View style={{marginLeft:15,flexDirection:'row'}}>
                            <Font14mediumhitam text="x"/>
                            <View style={{marginLeft:5}}>
                                <Font14mediumhitam text={props.itemQty}/>
                            </View>
                        </View>
                    
                    </View>
                    <View>
                        <Font12regular text={props.itemKet}/>
                    </View>
                </View>
            </View>
            <View>
                {
                    props.itemCategory === "MEJA" ?
                 <Font16bregularhitam text={numberFormat(props.itemQty * jumlah)}/>
                    :
                 <Font16bregularhitam text={numberFormat(props.subtotal)}/>
                }
            </View>
        </TouchableOpacity>
   
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
  };
 export default connect(mapDispatchToProps)(Listpesanan)



