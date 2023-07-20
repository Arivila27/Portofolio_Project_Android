import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColor } from '../../../../assets/color';
import { css } from '../../../../assets/css/cssku';
import Input from '../../../atoms/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Garis from '../../../atoms/garis';
import Font12mediumhitam from '../../../atoms/font12medium';
import Font14mediumhitam from '../../../atoms/font14mediumhitam';
import Tidakadadata from '../../../atoms/404';
import Tambahdataicon from '../../../atoms/tambahdata';
import Font12regular from '../../../atoms/font12regular';
import Font14bold from '../../../atoms/font14bold';
import Font14boldputih from '../../../atoms/font14boldputih';

const Tdatameja = (props) => {


    const [data, setData] = useState([

        {id:1,tableName:'Meja 1', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja01', tableStatus:'true', awal:'18:00', akhir:'19:00'},
        
        
        {id:2,tableName:'Meja 2', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja02', tableStatus:'false'},
        {id:3,tableName:'Meja 3', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja03', tableStatus:'false'},
        {id:4,tableName:'Meja 4', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja04', tableStatus:'true'},
        {id:5,tableName:'Meja 5', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja05', tableStatus:'false'},
        {id:6,tableName:'Meja 6', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja06', tableStatus:'true'},
        {id:7,tableName:'Meja 7', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja07', tableStatus:'true'},
        {id:8,tableName:'Meja 8', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja08', tableStatus:'true'},
        {id:9,tableName:'Meja 9', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja09', tableStatus:'false'},
        {id:10,tableName:'Meja 10', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja10', tableStatus:'false'},
        {id:11,tableName:'Meja 11', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja11', tableStatus:'true'},
        {id:12,tableName:'Meja 12', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja12', tableStatus:'false'},
        {id:13,tableName:'Meja 13', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja13', tableStatus:'true'},
    ])
    const [filterdata, setFilterdata] = useState([
        {id:1,tableName:'Meja 1', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja01', tableStatus:'true'},
        {id:2,tableName:'Meja 2', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja02', tableStatus:'false'},
        {id:3,tableName:'Meja 3', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja03', tableStatus:'false'},
        {id:4,tableName:'Meja 4', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja04', tableStatus:'true'},
        {id:5,tableName:'Meja 5', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja05', tableStatus:'false'},
        {id:6,tableName:'Meja 6', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja06', tableStatus:'true'},
        {id:7,tableName:'Meja 7', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja07', tableStatus:'true'},
        {id:8,tableName:'Meja 8', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja08', tableStatus:'true'},
        {id:9,tableName:'Meja 9', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja09', tableStatus:'false'},
        {id:10,tableName:'Meja 10', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja10', tableStatus:'false'},
        {id:11,tableName:'Meja 11', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja11', tableStatus:'true'},
        {id:12,tableName:'Meja 12', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja12', tableStatus:'false'},
        {id:13,tableName:'Meja 13', menuIcon:'table', navigation:'Sewameja',tableIot:'riomeja13', tableStatus:'true'},
    ])
    

    
   

    const searchFilter = (text) => {
        // setSearch(text)
        console.log(text)

        let filterdata = data.filter(function (item) {
            return item.tableName.toLocaleLowerCase().includes(text);
        });
        console.log(filterdata)
        setFilterdata(filterdata);
    } 
  
    const navigation = useNavigation();
    return (
    <View>
        <View style={css.marginContent18}>
            <View style={{flexDirection:'row', height:44 , borderWidth:1,borderColor:myColor.inputan1, marginTop:16,borderRadius:10,paddingHorizontal:17,justifyContent:'space-between',alignItems:'center'}}>
                <Input style={{flex:1}} placeholder='Cari Meja' onChangeText={newText => searchFilter(newText)}/>
                <Icon name="search" size={12} color={myColor.tombol1} />
            </View>
        </View>
        <Garis/>
        {
            filterdata.length == 0 ?
            <Tidakadadata text='Data Tidak Ditemukan'/>
            :
            null
        }
        <View style={{marginHorizontal:18}}>
                <FlatList
                   contentContainerStyle={{ paddingBottom: 260 }}
                   numColumns='2'
                   columnWrapperStyle={{justifyContent: 'space-between'}}  
                    data={filterdata}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <TouchableOpacity
                        style={css.menuContainer3} 
                        onPress={()=> navigation.navigate(item.navigation,{
                            tableIot: item.tableIot
                          })}>
                        {
                            item.tableStatus == 'false' ?
                            <View style={{justifyContent:'center',alignItems:'center', height:30,backgroundColor:'green',width:'auto',borderTopRightRadius:4,borderTopLeftRadius:4,marginBottom:15}}>
                                <Font14boldputih text="Available"/>
                            </View>
                            :
                            <View style={{justifyContent:'center',alignItems:'center', height:30,backgroundColor:'red',width:'auto',borderTopRightRadius:4,borderTopLeftRadius:4,marginBottom:15}}>
                                <Font14boldputih text="On Booking"/>
                            </View>
                        }
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View style={css.menuIconKaryawan}>
                                <Icon name={item.menuIcon} size={40} color={myColor.warna1} />
                            </View >
                            <View style={{marginTop:8}}>
                                <Font14mediumhitam text={item.tableName}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>

    </View>
   
    );
}
export default Tdatameja

