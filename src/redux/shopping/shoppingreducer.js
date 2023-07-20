import { act } from "react-test-renderer";
import * as actionTypes from "./shoppingtypes";

const INITIAL_STATE = {
  products: [],
  cart: [],
  cart2:[],
  device : [],
  placedevice : [],
  infoMeja:'',
  mejaBilliard : '',
  infoUser:'',
  idtrns : '',
  infoWaiters:'',
  statusku:false,
  totalBayar:[],
  uangditerima:[],
  uangkembali:[],
  pembayaran:[],
  currentItem: null,
  token:[],
  datalogin:[],
  diskon:[]
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product._id === action.payload.id
      );
      // console.log("APA ISINYA ",item )
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item._id === action.payload.id ? true : false
      );
      // console.log("STATUS Ku 2",inCart)
      return {
        ...state,
        // products : state.products.map((itemku)=>{
        //   itemku.id === action.payload.id ?
        //   console.log("gag ada qty")
        //   :
        //   console.log("ada qty")

        // }

        // ),
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.id
                ? { ...item, itemQty: item.itemQty + 1 , itemNoted:item.ket }
                : item
            )
          : [...state.cart, { ...item, itemQty: 1 ,itemNoted:''}],
      };
      
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    case actionTypes.PRICETYPE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item,  itemNoted:action.payload.ket  }
            : item
        ),
      };
     case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, itemQty: +action.payload.qty , itemNoted:action.payload.ket  }
            : item
        ),
      };
      case actionTypes.ADJUST_PRODUCT_QTY:
      return {
        ...state,
        products: state.products.map((item) =>
          item._id === action.payload.id
            ? { ...item, itemQty: +action.payload.qty , itemNoted:action.payload.ket  }
            : item
        ),
      };
      case actionTypes.ADJUST_ITEM_PRICE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, itemQty: +action.payload.qty , itemPrice:action.payload.ket  }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
      case actionTypes.ADD_TABLE:
      return {
        ...state,
        infoMeja: action.payload,
      };
      case actionTypes.ADD_BILIARD:
      return {
        ...state,
        mejaBilliard: action.payload,
      };
      case actionTypes.ADD_CART2:
      return {
        ...state,
        cart2: action.payload,
      };
      case actionTypes.ADD_DEVICE:
      return {
        ...state,
        device: action.payload,
      };
      case actionTypes.DATA_LOGIN:
      return {
        ...state,
        datalogin: action.payload,
      };
      case actionTypes.STATUS:
      return {
        ...state,
        statusku: action.payload,
      };

      case actionTypes.ADD_PELANGGAN:
        return {
          ...state,
          infoUser: action.payload,
        };
        case actionTypes.ADD_IDTRANS:
        return {
          ...state,
          idtrns: action.payload,
        };
        case actionTypes.ADD_WAITERS:
          return {
            ...state,
            infoWaiters: action.payload,
          };
        case actionTypes.ADD_TOKEN:
        return {
          ...state,
          token: action.payload,
        };
        case actionTypes.ADD_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      case actionTypes.ADD_COUNT:
        return {
          ...state,
          totalBayar: action.payload,
        };

        case actionTypes.ADD_CART_ALL:
        return {
          ...state,
          cart: action.payload,
        };

        case actionTypes.UPDATE_PRODUCTS:
        return {
          ...state,
        products: state.products.map((item) =>
          item._id === action.payload.id
            ? item.itemQty === undefined ?
            { ...item, itemQty: 1} : { ...item, itemQty: item.itemQty +1}
            : item
        ),
        };
        case actionTypes.UPDATE_PRODUCTS_TABLE:
        return {
          ...state,
        products: state.products.map((item) =>
          item._id === action.payload.id
            ? item.itemQty === undefined ?
            { ...item, itemQty: action.payload.qty} : { ...item, itemQty: action.payload.qty}
            : item
        ),
        };
        case actionTypes.UPDATE_PRODUCTS_MIN:
          return {
            ...state,
          products: state.products.map((item) =>
            item._id === action.payload.id
              ? { ...item, itemQty: action.payload.qty - 1}
              : item
          ),
          };
          case actionTypes.UPDATE_CART_MIN:
          return {
            ...state,
            
          cart: state.cart.map((item) =>
            item._id === action.payload.id
              ? { ...item, itemQty: action.payload.qty - 1}
              : item
          ),
          };
          case actionTypes.DELETE_TABLE:
          return {
            ...state,
            infoMeja:[]
          };
        case actionTypes.DELETE_USER:
          return {
            ...state,
            infoUser:[]
          };
          case actionTypes.DELETE_CART:
          return {
            ...state,
            cart:[],
            cart2:[]
          };
          case actionTypes.DELETE_CART1:
            return {
              ...state,
              cart:[],
            };
          case actionTypes.REPLACE_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
        case actionTypes.FIRST_DATA_PRODUCTS:
          return {
            ...state,
            products: action.payload,
          };
          case actionTypes.UANG_DITERIMA:
            return {
              ...state,
              uangditerima: action.payload,
            };

            case actionTypes.ADD_DISKON:
            return {
              ...state,
              diskon: action.payload,
            };

            case actionTypes.UANG_KEMBALI:
            return {
              ...state,
              uangkembali: action.payload,
            };
            case actionTypes.PEMBAYARAN:
            return {
              ...state,
              pembayaran: action.payload,
            };
            case actionTypes.ADD_CART_AND_QTY:
            // Great Item data from products array
            const item2 = state.products.find(
              (product) => product._id === action.payload.id
            );
            // console.log("APA ISINYA ",item )
            // Check if Item is in cart already
            const inCart2 = state.cart.find((item) =>
              item._id === action.payload.id ? true : false
            );
      // console.log("STATUS Ku 2",inCart)
      return {
        ...state,
        cart: inCart2
          ? state.cart.map((item) =>
              item._id === action.payload.id
                ? { ...item,  itemQty:action.payload.qty}
                : item
            )
          : [...state.cart, { ...item2, itemQty:action.payload.qty}],
      };

      case actionTypes.CLEARALL:
        return {
          ...state,
          cart:[],
          cart2:[],
          infoMeja:'',
          infoUser:'',
          infoWaiters:'',
          totalBayar:[],
          uangditerima:[],
          uangkembali:[],
          pembayaran:[],
          currentItem: null,
          diskon:[]
        };
      
    default:
      return state;
  }
};

export default shopReducer;
