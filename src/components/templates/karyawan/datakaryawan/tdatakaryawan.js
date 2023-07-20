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

const Tdatakaryawan = (props) => {


    const [data, setData] = useState([
        {id:1,pegawaiName:'Ruben', menuIcon:'user', navigation:'Datakaryawan'},
        {id:2,pegawaiName:'Annisatun Nikmah', menuIcon:'user', navigation:'Datakaryawan'},
        {id:3,pegawaiName:'Diaz Albawafi', menuIcon:'user',navigation:'Datakaryawan'},
        {id:4,pegawaiName:'Winda Eftian', menuIcon:'user',navigation:'Datakaryawan'},
        {id:5,pegawaiName:'Moh. Kholil', menuIcon:'user',navigation:'Datakaryawan'},
        {id:6,pegawaiName:'Syaifur Roni', menuIcon:'user',navigation:'Datakaryawan'},
        {id:7,pegawaiName:'Wulan', menuIcon:'user',navigation:'Datakaryawan'},
        {id:8,pegawaiName:'Nayla', menuIcon:'user',navigation:'Datakaryawan'},
        {id:9,pegawaiName:'Falinda Amalia', menuIcon:'user',navigation:'Datakaryawan'},
        {id:10,pegawaiName:'Rozin', menuIcon:'user',navigation:'Datakaryawan'},
        {id:11,pegawaiName:'Resi Efendi', menuIcon:'user',navigation:'Datakaryawan'},
        {id:12,pegawaiName:'Baginda', menuIcon:'user',navigation:'Datakaryawan'},
        {id:13,pegawaiName:'Aming', menuIcon:'user',navigation:'Datakaryawan'},
        {id:14,pegawaiName:'Hafiza', menuIcon:'user',navigation:'Datakaryawan'},
    ])
    const [filterdata, setFilterdata] = useState([
        {id:1,pegawaiName:'Ruben', menuIcon:'user', navigation:'Datakaryawan'},
        {id:2,pegawaiName:'Annisatun Nikmah', menuIcon:'user', navigation:'Datakaryawan'},
        {id:3,pegawaiName:'Diaz Albawafi', menuIcon:'user',navigation:'Datakaryawan'},
        {id:4,pegawaiName:'Winda Eftian', menuIcon:'user',navigation:'Datakaryawan'},
        {id:5,pegawaiName:'Moh. Kholil', menuIcon:'user',navigation:'Datakaryawan'},
        {id:6,pegawaiName:'Syaifur Roni', menuIcon:'user',navigation:'Datakaryawan'},
        {id:7,pegawaiName:'Wulan', menuIcon:'user',navigation:'Datakaryawan'},
        {id:8,pegawaiName:'Nayla', menuIcon:'user',navigation:'Datakaryawan'},
        {id:9,pegawaiName:'Falinda Amalia', menuIcon:'user',navigation:'Datakaryawan'},
        {id:10,pegawaiName:'Rozin', menuIcon:'user',navigation:'Datakaryawan'},
        {id:11,pegawaiName:'Resi Efendi', menuIcon:'user',navigation:'Datakaryawan'},
        {id:12,pegawaiName:'Baginda', menuIcon:'user',navigation:'Datakaryawan'},
        {id:13,pegawaiName:'Aming', menuIcon:'user',navigation:'Datakaryawan'},
        {id:14,pegawaiName:'Hafiza', menuIcon:'user',navigation:'Datakaryawan'},
    ])
    

    
   

    const searchFilter = (text) => {
        // setSearch(text)
        console.log(text)

        let filterdata = data.filter(function (item) {
            return item.pegawaiName.toLocaleLowerCase().includes(text);
        });
        console.log(filterdata)
        setFilterdata(filterdata);
    } 

    function renderData(){
      if(  filterdata.length % 2 === 0 ){
        return <View style={css.menuGrid2}>
            {renderPegawai()}
        </View>
      }else{
        return <View style={css.menuGrid2}>
                {renderPegawai()}
                <TouchableOpacity style={css.menuContainerkosong2}/>
        </View>
      }
    }

    function renderPegawai() {
        let conversationContent = data.map((convObj, i) => {
          return  <TouchableOpacity key={i} 
                        style={css.menuContainer2} 
                        onPress={()=> navigation.navigate(convObj.navigation)}>
                        <View style={css.menuIconKaryawan}>
                            <Icon name={convObj.menuIcon} size={40} color={myColor.warna1} />
                        </View >
                        <View style={{marginTop:8}}>
                            <Font14mediumhitam text={convObj.pegawaiName}/>
                        </View>
                    </TouchableOpacity>                       
        })
        return conversationContent
      }

  
    const navigation = useNavigation();
    return (
    <View>
        <View style={css.marginContent18}>
            <View style={{flexDirection:'row', height:44 , borderWidth:1,borderColor:myColor.inputan1, marginTop:16,borderRadius:10,paddingHorizontal:17,justifyContent:'space-between',alignItems:'center'}}>
                <Input style={{flex:1}} placeholder='Cari Nama Karyawan' onChangeText={newText => searchFilter(newText)}/>
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
                        style={css.menuContainer2} 
                        onPress={()=> navigation.navigate(item.navigation)}>
                        <View style={css.menuIconKaryawan}>
                            <Icon name={item.menuIcon} size={40} color={myColor.warna1} />
                        </View >
                        <View style={{marginTop:8}}>
                            <Font14mediumhitam text={item.pegawaiName}/>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>

    </View>
   
    );
}
export default Tdatakaryawan

