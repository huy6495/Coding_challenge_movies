import axios from "axios";
import convertArrayMovies from "../../Helper/convertArrayMovies";
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

      // const apiArrayMovies = await result.data.results;

      const arrayMovie = await convertArrayMovies(result.data.results);

      // await console.log(arrayMovie);

      await dispatch({
        type: "SET_LIST_MOVIE",
        arrayMovies: arrayMovie,
      });

      await dispatch({ type: "HIDE_LOADING_LIST" });
    } catch (err) {
      if (err.message === "Network Error") {
        alert("Internet disconnected");
      }
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

      const detailMovie = await result.data;
      let { backdrop_path } = await detailMovie;
      detailMovie.backdrop_path = (await IMAGE_DOMAIN) + backdrop_path;
      // console.log(detailMovie);

      await dispatch({
        type: "SET_DETAIL_MOVIE",
        detailMovie: detailMovie,
      });

      await dispatch({ type: "HIDE_LOADING_DETAIL" });
    } catch (err) {
      if (err.message === "Network Error") {
        alert("Internet disconnected");
      }
      console.log(err);
    }
  };
};
