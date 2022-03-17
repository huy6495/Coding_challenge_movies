import axios from "axios";
import { DOMAIN } from "../../Utils/setting";

//All actions of app will be expressed here, with reduxThunk, components can dispatch these function to reducer

//Get list products ...
export const getListProducts = (param) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/product`,
      });
      // console.log(result.data);
      await dispatch({
        type: "SET_LIST_PRODUCT",
        listProduct: result.data,
      });
      await dispatch({ type: "HIDE_LOADING" });
    } catch (err) {
      console.log(err);
    }
  };
};

//Get detail product ...
export const getDetailProduct = (productID) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/product/${productID}`,
      });
      // console.log(result.data);
      await dispatch({
        type: "SET_DETAIL_PRODUCT",
        detailProduct: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
