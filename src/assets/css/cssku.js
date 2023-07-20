import React , {Component} from 'react';
import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
import { myColor } from '../color'; 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
import { width } from '@fortawesome/free-brands-svg-icons/faTiktok';
  

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const css =  StyleSheet.create({



    bawahtengah:{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 30, justifyContent: 'flex-end', alignItems: 'center'
    },

    garis :{
        borderWidth:1,
        marginVertical:20,
        borderColor:myColor.inputan1,
    },

    mt30 :{
        marginTop:30
    },

    backgroundpageputih :{
        backgroundColor:myColor.putih, 
        flex:1
    },
    backgroundpageputihfull :{
        backgroundColor:myColor.putih, 
        height: Dimensions.get('window').height 
    },

    marginjudul :{
        marginVertical:50,
    },
    marginsubjudullogin :{
       marginTop:72,
       marginBottom:20
    },

    marginContent :{
        marginHorizontal:28
    },
    marginContent16 :{
        marginHorizontal:16
    },
    marginContent18 :{
        marginHorizontal:18
    },

    stylejudul:{
        backgroundColor:myColor.warna1,
        paddingHorizontal:20,
        paddingBottom:10,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        height: responsiveHeight(50),
       
    },

    imageonboarding : {
        width: responsiveWidth(100),
        height: responsiveHeight(60),
        justifyContent:'center',
        alignItems:'center'
    },

    imageonboarding2 : {
        width: "70%",
        height:119
    },

    jarakjudulutama : {
        marginTop:20,
        marginBottom:26
    },

    jaraktombol : {
        marginBottom:26
    },
    jarakform: {
        marginBottom:20
    },
    jarakform10: {
        marginBottom:10
    },
    jaraksubjudulform: {
        marginBottom:18
    },

    jaratketform: {
        marginBottom:100
    },

    tombol_full_1: {
        backgroundColor:myColor.putih,
        height:54,
        borderRadius:10,
        justifyContent:'center'
    },
    tombol_full_100: {
        backgroundColor:myColor.merah,
        height:54,
        borderRadius:10,
        justifyContent:'center'
    },
    tombol_full_2: {
        backgroundColor:myColor.tombol1,
        height:54,
        borderRadius:10,
        justifyContent:'center'
    },
    tombol_full_billiard: {
        backgroundColor:myColor.tombol1,
        height:54,
        width:'48%',
        borderRadius:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    tombol_full_billiard_cancel: {
        backgroundColor:myColor.merah,
        height:54,
        width:'48%',
        borderRadius:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    tombol_full_3: {
        borderColor:myColor.putih,
        borderWidth:1,
        height:54,
        borderRadius:10,
        justifyContent:'center'
    },

    font_judul_1: {
        fontSize:38,
        color:myColor.putih,
        textAlign:'center',
        fontFamily:'DMSans-Bold'
    },

    font14boldwarna1: {
        fontSize:14,
        color:myColor.warna1,
        textAlign:'right',
        fontFamily:'DMSans-Bold'
    },
    font16boldwarna1: {
        fontSize:16,
        color:myColor.warna1,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font14boldhitam: {
        fontSize:14,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font16boldhitam: {
        fontSize:16,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font14boldputih: {
        fontSize:14,
        color:myColor.putih,
        fontFamily:'DMSans-Bold'
    },
    font14mediumhitam: {
        fontSize:14,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font14mediumabuabu: {
        fontSize:14,
        color:myColor.font1,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font16mediumhitam: {
        fontSize:16,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font12mediumorange: {
        fontSize:12,
        color:myColor.warnario2,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font14mediumorange: {
        fontSize:14,
        color:myColor.warnario2,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font24boldrange: {
        fontSize:24,
        color:myColor.warna1,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font24boldhitam: {
        fontSize:24,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font24mediumhitam: {
        fontSize:18,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font24boldputih: {
        fontSize:24,
        color:myColor.putih,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },


    font12mediumhitam: {
        fontSize:12,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font12mediumputih: {
        fontSize:12,
        color:myColor.putih,
        textAlign:'left',
        fontFamily:'DMSans-Medium'
    },
    font12regular: {
        fontSize:12,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },
    font12regularorange: {
        fontSize:12,
        color:myColor.warna1,
        textAlign:'left',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },
    font14regularhitam: {
        fontSize:14,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },
    font16regularhitam: {
        fontSize:16,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },
    font12regularputih: {
        fontSize:12,
        color:myColor.putih,
        textAlign:'left',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },
    font12regularcenter: {
        fontSize:12,
        color:myColor.hitam,
        textAlign:'center',
        fontFamily:'DMSans-Regular',
        letterSpacing:0.3
    },

    font_judul_2: {
        fontSize:38,
        color:myColor.warna1,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },

    font_sub_judul_2: {
        fontSize:16,
        color:myColor.hitam,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },
    font_sub_judul_1: {
        fontSize:16,
        color:myColor.putih,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },

    font_ket: {
        letterSpacing:0.3,
        fontSize:12,
        color:myColor.fontket,
        textAlign:'left',
        fontFamily:'DMSans-Bold'
    },

    font_tombol_1: {
        fontSize:16,
        color:myColor.warna1,
        textAlign:'center',
        fontFamily:'DMSans-Medium'
    },
    font_tombol_2: {
        fontSize:16,
        color:myColor.putih,
        textAlign:'center',
        fontFamily:'DMSans-Medium'
    },
    font_tombol_3: {
        fontSize:40,
        marginHorizontal:10,
        color:myColor.hitam,
        textAlign:'center',
        fontFamily:'DMSans-Bold'
    },

    inputan_1 :{
        paddingHorizontal:16,
        paddingVertical:18,
        borderWidth:1,
        borderColor:myColor.inputan1,
        height:58,
        borderRadius:6
    },

    //home

    containerbiru:{
        backgroundColor:myColor.warna1,
        paddingHorizontal:16,
        paddingBottom:20
    },

    containersaldo:{
        backgroundColor:myColor.putih,
        paddingLeft:15,
        paddingTop:19,
        paddingBottom:12,
        paddingRight:15,
        marginTop:12,
        borderRadius:6
    },

    menuContainer:{
        height:98,
        width:`${100/3-5}%`, 
        borderWidth:1,
        borderColor:myColor.warna1,
        borderRadius:6, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainer4:{
        height:88,
        width:`${100/3-10}%`, 
        borderWidth:1,
        borderColor:myColor.abuabu,
        borderRadius:100, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainer4orange:{
        height:88,
        width:`${100/3-10}%`, 
        borderWidth:1,
        borderColor:myColor.warna1,
        backgroundColor:myColor.warna1,
        borderRadius:100, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainer4merah:{
        height:88,
        width:`${100/3-10}%`, 
        borderWidth:1,
        borderColor:myColor.warna1,
        backgroundColor:myColor.merah,
        borderRadius:100, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainer4kosong:{
        height:88,
        width:`${100/3-10}%`, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainer2:{
        height:147,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.warna1,
        borderRadius:6, 
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:18
    },
    menuContainermakanan2:{
        backgroundColor:myColor.putih,
        paddingTop:18,
        paddingHorizontal:20,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.inputan1,
        borderRadius:10, 
        marginBottom:18,
        zIndex:1,
        paddingBottom:10
    },
    menuContainerBilliardRed:{
        backgroundColor:myColor.merah,
        paddingTop:18,
        paddingHorizontal:20,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.inputan1,
        borderRadius:10, 
        marginBottom:18,
        zIndex:1,
        paddingBottom:10
    },
    menuContainerBilliardYellow:{
        backgroundColor:myColor.warna1,
        paddingTop:18,
        paddingHorizontal:20,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.inputan1,
        borderRadius:10, 
        marginBottom:18,
        zIndex:1,
        paddingBottom:10
    },
    menuContainerCetakAbsolute:{
        flex : 1,
        position : 'absolute'
    },
    menuContainerCetak:{
        flex : 1,
    },
    menuContainerBilliardGreen:{
        backgroundColor:'green',
        paddingTop:18,
        paddingHorizontal:20,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.inputan1,
        borderRadius:10, 
        marginBottom:18,
        zIndex:1,
        paddingBottom:10
    },
    menuContainermeja:{
        paddingTop:10,
        paddingHorizontal:8,
        width:`${100/4-5}%`, 
        marginBottom:10
    },
    menuContainer3:{
        height:147,
        width:`${100/2-5}%`, 
        borderWidth:1,
        borderColor:myColor.warna1,
        borderRadius:6, 
        marginBottom:18
    },
    menuContainerkosong:{
        height:98,
        width:`${100/3-5}%`,
        marginBottom:16
    },
    menuContainerkosong2:{
        height:147,
        width:`${100/2-5}%`,
        marginBottom:16
    },
    menuGrid3:{
        flexDirection:'row',
        marginTop:21,
        marginHorizontal:18,
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    menuGrid4:{
        flexDirection:'row',
        marginTop:21,
        marginHorizontal:18,
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center'
    },
    menuGrid2:{
        flexDirection:'row',
        marginTop:21,
        marginHorizontal:18,
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    menuIcon:{
        width:49,
        height:49,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center', 
        alignItems:'center'
    },
    menuIconKaryawan:{
        width:55,
        height:55,
        borderWidth:1,
        borderColor:myColor.warna1,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center', 
        alignItems:'center'
    },

    containerflatlist: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 40
    },
    listItemflatlist: {
        maxWidth: Dimensions.get('window').width /2,
        flex:0.5,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 4,
    },

    

    


  });