import axios from "axios";
import { api_key, DOMAIN, IMAGE_DOMAIN } from "../../Utils/setting";

//All actions of app will be expressed here, with reduxThunk, components can dispatch these function to reducer

//Get list movies ...
export const getListMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}now_playing?api_key=${api_key}&language=en-US&page=${page}`,
      });
      // console.log(result.data.results);
      await dispatch({
        type: "SET_LIST_MOVIE",
        arrayMovies: result.data.results,
      });
      await dispatch({ type: "HIDE_LOADING" });
    } catch (err) {
      console.log(err);
    }
  };
};

//Get detail movie ...
export const getDetailMovie = (productID = 550) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}${productID}?api_key=${api_key}`,
      });

      const detailMovie = result.data;
      let { backdrop_path } = detailMovie;
      detailMovie.backdrop_path = IMAGE_DOMAIN + backdrop_path;
      console.log(detailMovie);

      await dispatch({
        type: "SET_DETAIL_MOVIE",
        detailMovie: detailMovie,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
