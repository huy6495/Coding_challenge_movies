import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListMovies } from "../../Redux/Actions/MovieActions";
import "./_buttonSwitch.scss";

export default function ButtonSwitch() {
  const { top_rated } = useSelector((state) => state.MovieReducer);

  const dispatch = useDispatch();

  const handleSwitch = async (kind) => {
    if (kind === "top_rated") {
      await dispatch({ type: "SET_TOP_RATED" });
      dispatch(getListMovies("top_rated"));
    } else if (kind === "now_playing") {
      await dispatch({ type: "SET_NOW_PLAYING" });
      dispatch(getListMovies());
    }
  };
  return (
    <div className="wrap-switch-btn ">
      <ul className="d-flex justify-content-center">
        <li onClick={() => handleSwitch("now_playing")}>
          {top_rated ? (
            <p className="tab-button">Now playing</p>
          ) : (
            <p className="tab-button-actice">Now playing</p>
          )}
        </li>
        <li onClick={() => handleSwitch("top_rated")}>
          {!top_rated ? (
            <p className="tab-button">Top rated</p>
          ) : (
            <p className="tab-button-actice">Top rated</p>
          )}
        </li>
      </ul>
    </div>
  );
}
