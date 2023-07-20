import React, { useState } from 'react'; 

import {View,TouchableOpacity,FlatList,Image, TextInput} from 'react-native';
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
import Font16boldhitam from '../../../atoms/font16boldhitam';
import { connect } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux'
import Font14boldputih from '../../../atoms/font14boldputih';
import { adjustItemQty, updateProductsMin,removeFromCart,replaceProducts ,firstDataProducts, adjustProductQty} from '../../../../redux/shopping/shoppingaction';
const Tubahpesanan = ({props,current,cart,products}) => {


   const  [productsawal] = useState( [
        {
            _id: "632e70b9439b4b62219b47a6",
            itemGroup: "ITEMJUAL",
            itemCategory: "MAKANAN",
            itemMerk: "-",
            itemVarian: [],
            itemCode: "MKN001",
            itemName: "NASI GORENG",
            itemPrice: 35000.00,
            itemImage: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/09/Resep-Nasi-Goreng-Ikan-Teri.jpg?fit=500%2C375&ssl=1",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987897586",
            __v: 0
        },
        {
            _id: "632e70d6439b4b62219b47a8",
            itemGroup: "ITEMJUAL",
            itemCategory: "MAKANAN",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MKN002",
            itemName: "SOP IGA BUNTUT SAPI",
            itemPrice: 35000.00,
            itemImage: "https://image.akurat.co/uploads/gallery/2022/03/gal_62329ddc66c362-53556683-20382877.jpg",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987926971",
            __v: 0
        },
        {
            _id: "632e70eb439b4b62219b47aa",
            itemGroup: "ITEMJUAL",
            itemCategory: "MINUMAN",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MNM003",
            itemName: "ES TEH",
            itemPrice: 35000.00,
            itemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuT0mJDbOrEfkdmMhYoM7pbr6rbh2L3uZTOktEGXda7oXb9jyU5Wv3lI41CqaGX-kn08&usqp=CAU",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987947338",
            __v: 0
        },
        {
            _id: "632e70ef439b4b62219b47ac",
            itemGroup: "ITEMJUAL",
            itemCategory: "MINUMAN",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MNM003",
            itemName: "ES JERUK",
            itemPrice: 35000.00,
            itemImage: "https://media.suara.com/pictures/653x366/2020/05/16/91964-ilustrasi-minuman-orange-squash-shutterstock.jpg",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987951346",
            __v: 0
        },
        {
            _id: "632e70f5439b4b62219b47ae",
            itemGroup: "ITEMJUAL",
            itemCategory: "MINUMAN",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MNM003",
            itemName: "ES TARO",
            itemPrice: 35000.00,
            itemImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BNA3fIAkD5QPW_b3OuNeASZ2R5fm9pQXCw&usqp=CAU",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987957124",
            __v: 0
        },
        {
            _id: "632e70f8439b4b62219b47b0",
            itemGroup: "ITEMJUAL",
            itemCategory: "MINUMAN",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MNM003",
            itemName: "ES JUS ALPUKAT",
            itemPrice: 35000.00,
            itemImage: "https://4.bp.blogspot.com/--jyaYCACn_c/XPDx3zMNV3I/AAAAAAAADOM/atipuNpHrfkXANTj0gb6bCrwliwDOb4jwCLcBGAs/s1600/how-to-make-avocado-juice-.jpg",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987960467",
            __v: 0
        },
        {
            _id: "632e7106439b4b62219b47b2",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM001",
            itemName: "MEJA1",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987974826",
            __v: 0
        },
        {
            _id: "632e710c439b4b62219b47b4",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM002",
            itemName: "MEJA2",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987980679",
            __v: 0
        },
        {
            _id: "632e7119439b4b62219b47b6",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM003",
            itemName: "MEJA3",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987993910",
            __v: 0
        },
        {
            _id: "632e711f439b4b62219b47b8",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM004",
            itemName: "MEJA4",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663987999256",
            __v: 0
        },
        {
            _id: "632e7123439b4b62219b47ba",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM005",
            itemName: "MEJA5",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988003478",
            __v: 0
        },
        {
            _id: "632e7127439b4b62219b47bc",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM006",
            itemName: "MEJA6",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988007834",
            __v: 0
        },
        {
            _id: "632e712d439b4b62219b47be",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM007",
            itemName: "MEJA7",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988013402",
            __v: 0
        },
        {
            _id: "632e7132439b4b62219b47c0",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM008",
            itemName: "MEJA8",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988018108",
            __v: 0
        },
        {
            _id: "632e7136439b4b62219b47c2",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM009",
            itemName: "MEJA9",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988022611",
            __v: 0
        },
        {
            _id: "632e713c439b4b62219b47c4",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM010",
            itemName: "MEJA10",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988028304",
            __v: 0
        },
        {
            _id: "632e7140439b4b62219b47c6",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM011",
            itemName: "MEJA11",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988032762",
            __v: 0
        },
        {
            _id: "632e7146439b4b62219b47c8",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM012",
            itemName: "MEJA12",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988038839",
            __v: 0
        },
        {
            _id: "632e714a439b4b62219b47ca",
            itemGroup: "ITEMJUAL",
            itemCategory: "MEJA",
            itemMerk: "-",
            itemVarian: [
                "-"
            ],
            itemCode: "MJM013",
            itemName: "MEJA13",
            itemPrice: 35000.00,
            itemImage: "https://e7.pngegg.com/pngimages/687/293/png-clipart-english-billiards-billiard-table-nine-ball-blackball-billiards-painted-hand.png",
            itemDomain: "632e5aa34529502f49388c0d",
            itemDeleted: "no",
            itemCreated: "1663988042680",
            __v: 0
        }
    ])

    // console.log("CURRENT ",current)
    const [ket, setKet] = useState(current.ket);
    const [input, setInput] = useState(current.itemQty);
    const dispatch= useDispatch();
    
    const navigation = useNavigation();
    return (
    <View style={{flex:1}}>    

    <View style={{marginHorizontal:25,paddingTop:28}}>
        <View style={{flexDirection:'row'}}> 
            <Image
                resizeMode='contain'
                style={{height:61, width:91,borderRadius:10}}
                source={{uri:current.itemImage}}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                <View style={{marginLeft:8}}>
                    <Font14mediumhitam text={current.itemName}/>
                </View>
                <View style={{alignSelf:'flex-end'}}>
                    <TouchableOpacity
                    onPress={()=>{
                        dispatch(adjustProductQty(current._id,0,''))
                        dispatch(removeFromCart(current._id))
                        if(cart.length === 1){
                            navigation.navigate('Menupenjualan')
                        }else{
                            navigation.navigate('Detailpesanan')
                        }
                    }}
                    style={{width:88,height:29,borderWidth:2,borderColor:'red',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Font12regular text="Hapus"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={{marginVertical:15}}>
            <View style={{height:1,width:"100%",backgroundColor:myColor.abuabu}}/>
        </View>

        <View>
            <Font14mediumhitam text="Harga"/>
            <Font16boldhitam text={current.itemPrice}/>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:35}}>
            <View>
                <Font14mediumhitam text="Jumlah"/>
                <Font16boldhitam text={input}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity 
                onPress={()=>{
                    console.log( "TAMBAH  ", input+1  )
                    setInput(input + 1)
                }}
                style={{backgroundColor:myColor.abuabu,width:50,height:50,borderRadius:100,marginRight:15,justifyContent:'center',alignItems:'center'}}>
                    <Icon name='plus' size={15} color={myColor.hitam} />
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{
                    if(input == 1){
                        setInput(input)
                    }else{
                        setInput(input - 1)
                    }
                }}
                style={{backgroundColor:myColor.abuabu,width:50,height:50,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                    <Icon name='minus' size={15} color={myColor.hitam} />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <Font14mediumhitam text="Catatan"/>
            <TextInput placeholder='Masukkan catatan' multiline={true} numberOfLines={3} 
            value={ket}
             onChangeText={(value) => setKet(value)}/>
        </View>

        
    </View>
     <View style={{position:'absolute',bottom:20,left:0,right:0,marginHorizontal:20}}>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Detailpesanan')
            dispatch(adjustItemQty(current._id,input,ket))
            dispatch(updateProductsMin(current._id,input+1))
        }}
        style={{backgroundColor:myColor.warna1,height:46,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Font14boldputih text="Simpan"/>
        </TouchableOpacity>
    </View>
 </View>
   
    );
}
const mapStateToProps = (state) => ({
    products: state.shop.products,
    cart: state.shop.cart,
    current: state.shop.currentItem,
});

export default connect(mapStateToProps)(Tubahpesanan)

