import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getListMovies } from "../../Redux/Actions/MovieActions";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import "./_filmBlock.scss";

export default function FilmBlock() {
  const [top_rated, setTopRate] = useState(false);
  const dispatch = useDispatch();

  const handleTopRated = async (kind) => {
    try {
      await setTopRate(!top_rated);
      await dispatch(getListMovies(kind));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="homeMovies" className="container text-center">
      <div className="col-xs-12 block mainMaxWidth">
        <ul className="nav nav-tabs navCenter">
          <li
            className="nav-item"
            onClick={() => handleTopRated("now_playing")}
          >
            <button
              className={`nav-link ${top_rated ? "" : "active"}`}
              style={{ outline: "none" }}
            >
              Now playing
            </button>
          </li>
          <li
            className="nav-item"
            style={{ marginLeft: 15 }}
            onClick={() => handleTopRated("top_rated")}
          >
            <button
              className={`nav-link ${!top_rated ? "" : "active"}`}
              style={{ outline: "none" }}
            >
              Top rated
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <SlickCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
