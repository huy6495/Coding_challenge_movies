const initialState = {
  listProduct: [],
  detailProduct: {},
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_PRODUCT": {
      // console.log(action.arrayMovie);
      return { ...state, listProduct: action.listProduct };
    }

    case "SET_DETAIL_PRODUCT": {
      return { ...state, detailProduct: action.detailMovie };
    }

    default:
      return state;
  }
};
