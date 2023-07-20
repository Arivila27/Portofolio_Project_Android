import React ,{useState,useRef,useEffect}from 'react';
import {View,  TouchableOpacity,Text } from 'react-native';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";


export default NumberFormat = (nilai)=> {

  var hasilku ;

  // console.log("NILAI , " ,formatCurrency({ amount: Number(nilai), code: "IDR" })[0])

   hasilku = formatCurrency({ amount: Number(nilai), code: "IDR" })

  return hasilku[0];

}
