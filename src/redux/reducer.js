import { combineReducers } from "redux";
import { KURANG , TAMBAH, UPADATE_DATA_MAKANAN, UPADATE_DATA_PESANAN } from "./type";
import shopReducer from "./shopping/shoppingreducer";
// const initialState = {
//   products: [],
// };
// const ShoppinReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id ? {...product, selected: true} : product,
//         ),
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {...product, selected: false, quantity: 1}
//             : product,
//         ),
//       };
//     case ADD_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {...product, quantity: product.quantity + 1}
//             : product,
//         ),
//       };
//     case SUB_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {
//                 ...product,
//                 quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
//               }
//             : product,
//         ),
//       };
//     case EMPTY_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.selected
//             ? {...product, selected: false, quantity: 1}
//             : product,
//         ),
//       };
//     default:
//       return state;
//   }
// };

const initDataPesanan = {
  Datapesanan : []
  
} 
const reducerDataPesanan = (state = initDataPesanan , action) => {
  switch(action.type){
      case UPADATE_DATA_PESANAN:
          return{...state,
                Datapesanan:state.Datapesanan + action.data
                  }
          default:return state;
      }
}


const initDataMakanan = {
  Datamakanan : []
} 
const reducerDataMakanan = (state = initDataMakanan , action) => {
  switch(action.type){
      case UPADATE_DATA_MAKANAN:
          // console.log('UPDATE DATA');
          return{...state,
                    Datamakanan: action.data
                  }
          default:return state;
      }
}







    const initDataCounter = {
        counter : 0
    } 
    const reducerCounter = (state = initDataCounter , action) => {
        switch(action.type){
            case TAMBAH:
                // console.log('TAMBAH COUNTER');
                return{...state,counter:action.data + 1}
        
                case KURANG:
                    // console.log('KURANG COUNTER');
                    return{...state,counter:action.data - 1}
                default:return state;
            }
    }

    const  initialLoginState =  { 
        isLoading:true,
        userName:null,
        userToken:null
       };
    
    const reducerLogin = ( state = initialLoginState, action) => { 
         switch (action.type) {
           case 'RETRIEVE_TOKEN':
              return { 
                ...state,
                userToken: action.token,
                isLoading:false,
              };
           case 'LOGIN':
              return { 
                ...state,
                userName: action.id,
                userToken: action.token,
                isLoading:false,
              };
    
           case 'LOGOUT':
              return { 
                ...state,
                  userName:null,
                  userToken:null,
                  isLoading:false,
              };
           case 'REGISTER':
              return { 
                ...state,
                userName: action.id,
                userToken: action.token,
                isLoading:false,
              };  
              
              case 'LANJUT':
              return { 
                ...state,
                  userName:null,
                  userToken:null,
                  isLoading:false,
              };
              default:return state;
         }
    };
 const reducer = combineReducers({reducerCounter, reducerLogin,reducerDataMakanan,reducerDataPesanan,shop:shopReducer})

 export default reducer 