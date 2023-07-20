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
import { connect } from 'react-redux';
import numberFormat from '../../../utils/numberFormat';
import Font14boldhitam from '../../atoms/font14boldhitam';
import axios from 'axios';
import { myApi } from '../../../config/service/api';

const Listitemgudang = (props) => {
    const navigation = useNavigation();

    // axios.get(`${myApi.URL}/transjual/listTransById/${route.params.idku}`,{
    //     headers:{
    //         'auth-token':token
    //     }
    //  })
    //  .then(response =>{
        
    // }).catch(error => {

    // })
    


    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Detaillisttransaksi', {
            idku: props.id,
          })}
            style={{flexDirection:'row',height:76,opacity:0.5,borderBottomWidth:0.5,marginBottom:10}}>
                <View style={{width:70,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumhitam text="Nama Barang"/>
                    </View>
                    <View style={{marginTop:12}}>
                        <Font14boldhitam text={numberFormat(props.total)}/>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:50,backgroundColor:myColor.hitam}}/>
                </View>
                <View style={{width:70,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumhitam text="Nama"/>
                    </View>
                    <View style={{marginTop:12}}>
                        <Font14boldhitam text={props.transName}/>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:50,backgroundColor:myColor.hitam}}/>
                </View>
                <View style={{width:70,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumhitam text="No Meja"/>
                    </View>
                    <View style={{marginTop:12}}>
                        <Font14boldhitam text={props.transTable}/>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:50,backgroundColor:myColor.hitam}}/>
                </View>
                <View style={{width:70,justifyContent:'center',alignItems:'center'}}>
                   
                    
                </View>
                <View style={{justifyContent:'center',alignContent:'flex-end'}}>
                    <Icon name='chevron-right' size={20} color={myColor.hitam}/>
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
 export default connect(mapDispatchToProps)(Listitemgudang)



