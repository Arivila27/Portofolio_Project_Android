import React from 'react'; 
import { KURANG , TAMBAH,UPADATE_DATA_MAKANAN, UPADATE_DATA_PESANAN } from "./type";

export const tambahCounter = (couter) => ({
    type: TAMBAH,
    data: couter
})

export const kurangCounter = (couter) => ({
    type: KURANG,
    data: couter
})

export const updateDataMakanan = (newData) => ({
    type: UPADATE_DATA_MAKANAN,
    data: newData
})

export const updateDataPesanan = (newData) => ({
    type: UPADATE_DATA_PESANAN,
    data: newData
})

// export const addToCart = id => {
//     return {
//       type: ADD_TO_CART,
//       id
//     };
//   };
//   export const removeFromCart = id => {
//     return {
//       type: REMOVE_FROM_CART,
//       id,
//     };
//   };
//   export const subtractQuantity = id => {
//     return {
//       type: SUB_QUANTITY,
//       id,
//     };
//   };
//   export const addQuantity = id => {
//     return {
//       type: ADD_QUANTITY,
//       id,
//     };
//   };
//   export const emptyCart = () => {
//     return {
//       type: EMPTY_CART,
//     };
//   };


