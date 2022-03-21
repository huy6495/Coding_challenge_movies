import axios from "axios";
import convertArrayMovies from "../../Helper/convertArrayMovies";
import { api_key, DOMAIN, IMAGE_DOMAIN } from "../../Utils/setting";

//Get list movies ...
export const getListMovies = (kind = "now_playing", page = 1) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN + kind}?api_key=${api_key}&language=en-US&page=${page}`,
      });

      if (result.status !== 200) throw new Error("Internet disconnected!");

      const arrayMovie = await convertArrayMovies(result.data.results);

      await dispatch({
        type: "SET_LIST_MOVIE",
        arrayMovies: arrayMovie,
      });
    } catch (err) {
      console.log(err);

      if (err) {
        alert(err);
        console.log(err);
        return;
      }
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
      if (result.status !== 200) throw new Error("Internet disconnected!");

      const detailMovie = await result.data;
      let { backdrop_path } = await detailMovie;
      detailMovie.backdrop_path = (await IMAGE_DOMAIN) + backdrop_path;
      // console.log(detailMovie);

      await dispatch({
        type: "SET_DETAIL_MOVIE",
        detailMovie: detailMovie,
      });
    } catch (err) {
      if (err) {
        alert(err);
        console.log(err);
        return;
      }
    }
  };
};
