import * as actionTypes from "./shoppingtypes";

export const replaceProducts = (itemID) => {
  return {
    type: actionTypes.REPLACE_PRODUCTS,
    payload:itemID
  };
};

export const updateProducts = (id) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS,
    payload: {
      id: id,
    },
  };
};
export const updateProductstable = (id,qty) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS_TABLE,
    payload: {
      id: id,
      qty
    },
  };
};
export const updateCartmin = (id,qty) => {
  return {
    type: actionTypes.UPDATE_CART_MIN,
    payload: {
      id: id,
      qty:qty
    },
  };
};
export const updateProductsMin = (id,qty) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS_MIN,
    payload: {
      id: id,
      qty:qty
    },
  };
};

export const addTable = (itemID) => {
  return {
    type: actionTypes.ADD_TABLE,
    payload:itemID
  };
};
export const addBiliard = (itemID) => {
  return {
    type: actionTypes.ADD_BILIARD,
    payload:itemID
  };
};

export const addCart2 = (itemID) => {
  return {
    type: actionTypes.ADD_CART2,
    payload:itemID
  };
};
export const addDevice = (itemID) => {
  return {
    type: actionTypes.ADD_DEVICE,
    payload:itemID
  };
};

export const addDataLogin  = (itemID) => {
  return {
    type: actionTypes.DATA_LOGIN,
    payload:itemID
  };
};

export const addStatus = (itemID) => {
  return {
    type: actionTypes.STATUS,
    payload:itemID
  };
};
export const addpriceType = (id,ket) => {
  return {
    type: actionTypes.PRICETYPE,
    payload: {
      id: id,
      ket:ket
    },
  };
};



export const addToken = (itemID) => {
  return {
    type: actionTypes.ADD_TOKEN,
    payload:itemID
  };
};

export const deleteTable = (itemID) => {
  return {
    type: actionTypes.DELETE_TABLE,
    payload:itemID
  };
};
export const deleteUser = (itemID) => {
  return {
    type: actionTypes.DELETE_USER,
    payload:itemID
  };
};

export const clearall = (itemID) => {
  return {
    type: actionTypes.CLEARALL,
    payload:itemID
  };
};
export const deleteCart = (itemID) => {
  return {
    type: actionTypes.DELETE_CART,
    payload:itemID
  };
};
export const deleteCart1 = (itemID) => {
  return {
    type: actionTypes.DELETE_CART1,
    payload:itemID
  };
};
export const addPelanggan = (itemID) => {
  return {
    type: actionTypes.ADD_PELANGGAN,
    payload:itemID
  };
};
export const addIdtrans = (itemID) => {
  return {
    type: actionTypes.ADD_IDTRANS,
    payload:itemID
  };
};
export const addWaiters = (itemID) => {
  return {
    type: actionTypes.ADD_WAITERS,
    payload:itemID
  };
};

export const addProducts = (itemID) => {
  return {
    type: actionTypes.ADD_PRODUCTS,
    payload:itemID
  };
};

export const addCount = (itemID) => {
  return {
    type: actionTypes.ADD_COUNT,
    payload:itemID
  };
};

export const addCartAll = (itemID) => {
  return {
    type: actionTypes.ADD_CART_ALL,
    payload:itemID
  };
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty,ket) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
      ket
    },
  };
};
export const adjustProductQty = (itemID, qty,ket) => {
  return {
    type: actionTypes.ADJUST_PRODUCT_QTY,
    payload: {
      id: itemID,
      qty,
      ket
    },
  };
};

export const adjustItemPrice = (itemID, qty,ket) => {
  return {
    type: actionTypes.ADJUST_ITEM_PRICE,
    payload: {
      id: itemID,
      qty,
      ket
    },
  };
};

export const addCartandQty = (itemID, qty,mulai,akhir) => {
  return {
    type: actionTypes.ADD_CART_AND_QTY,
    payload: {
      id: itemID,
      qty,
      mulai,
      akhir
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const firstDataProducts = (itemID) => {
  return {
    type: actionTypes.FIRST_DATA_PRODUCTS,
    payload:itemID
  };
};

export const addUangditerima = (itemID) => {
  return {
    type: actionTypes.UANG_DITERIMA,
    payload:itemID
  };
};

export const addDiskon = (itemID) => {
  console.log("ADD DISKON ", itemID)
  return {
    type: actionTypes.ADD_DISKON,
    payload:itemID
  };
};

export const addUangkembali = (itemID) => {
  return {
    type: actionTypes.UANG_KEMBALI,
    payload:itemID
  };
};

export const addPembayaran = (itemID) => {
  return {
    type: actionTypes.PEMBAYARAN,
    payload:itemID
  };
};
