import axios from "axios";
import { api_key, SEARCH_DOMAIN } from "../../Utils/setting";

//Search movie
export const searchMovie = (param) => {
  return async (dispatch) => {
    try {
      // await console.log(param);
      const result = await axios({
        url: `${SEARCH_DOMAIN}movie?api_key=${api_key}&language=en-US&query=${param}&page=1`,
        method: "GET",
      });

      await dispatch({
        type: "SET_SEARCH",
        arraySearchName: result.data.results.slice(0, 7),
      });
    } catch (errors) {
      if (errors.response?.data.errors[0]) {
        dispatch({
          type: "SET_SEARCH",
          arraySearchName: [],
        });
      }
    }
  };
};
