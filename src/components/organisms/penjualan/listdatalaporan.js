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
import Font14mediumabuabu from '../../atoms/font14mediumabuabu';
import Font16boldhitam from '../../atoms/font16boldhitam';
import Font24mediumhitam from '../../atoms/font24mediumhitam';

const Listdatalaporan = (props) => {
    const navigation = useNavigation();

    

    return (
        <TouchableOpacity
            onPress={()=>{
               navigation.navigate("Cetaknotareport", {
                idku: props.id,
              }) 
            }}
            style={{flexDirection:'row',height:76,borderBottomWidth:0.1,marginBottom:10,backgroundColor:myColor.putih}}>
                <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumabuabu text="Atas Nama"/>
                    </View>
                    <View style={{marginTop:12}}>
                        <Font24mediumhitam text={props.transName}/>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:50,backgroundColor:myColor.hitam}}/>
                </View>
                <View style={{width:100,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumabuabu text="No Transaksi"/>
                    </View>
                    <View style={{marginTop:12}}>
                        <Font24mediumhitam text={props.transId}/>
                    </View>
                </View>
                <View style={{justifyContent:'center'}}>
                    <View style={{width:1.4,height:50,backgroundColor:myColor.hitam}}/>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Font14mediumabuabu text="Total Transaksi"/>
                    </View>
                    <View style={{marginTop:12}}>
                    <Font24mediumhitam text={numberFormat((props.total)- props.diskonnya)}/>
                    </View>
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
 export default connect(mapDispatchToProps)(Listdatalaporan)