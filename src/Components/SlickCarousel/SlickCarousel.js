import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_slickCarousel.scss";

import { getListMovies } from "../../Redux/Actions/MovieActions";

//import imgs
import Loading from "../Loading/Loading";
import SliderView from "../SliderView/SliderView";

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
  }, []);

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
