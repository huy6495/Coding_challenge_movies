import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_slickCarousel.scss";
// import PlayButton from "../PlayButton/PlayButton";

//import action to middleware
import { getListMovies } from "../../Redux/Actions/MovieActions";
import { NavLink } from "react-router-dom";
// import Loading from "../Loading/Loading";
// import { DOMAIN } from "../../Utils/setting";

//import imgs
import Loading from "../Loading/Loading";
import SliderView from "../SliderView/SliderView";
import ButtonGrid from "../ButtonGrid/ButtonGrid";

//rfc
function SlickCarousel(props) {
  const { arrayMovies, isLoadingSlider } = useSelector(
    (state) => state.MovieReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getListMovies();
    dispatch(action);
    return () => {};
  }, [isLoadingSlider]);

  return (
    <div style={{ maxHeight: "760px" }}>
      {isLoadingSlider ? (
        <Loading size="300px" />
      ) : (
        <SliderView arrayMovies={arrayMovies} />
      )}
    </div>
  );
}

//React.memo
export default React.memo(SlickCarousel);
