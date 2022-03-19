import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "./_slickCarousel.scss";
// import PlayButton from "../PlayButton/PlayButton";

//import action to middleware
import { getListMovies } from "../../Redux/Actions/MovieActions";
import { NavLink } from "react-router-dom";
// import Loading from "../Loading/Loading";
// import { DOMAIN } from "../../Utils/setting";

//import imgs
import back from "../../Assets/Img/back-session.png";
import next from "../../Assets/Img/next-session.png";
import { IMAGE_DOMAIN } from "../../Utils/setting";

export default function SlickCarousel(props) {
  const { arrayMovies } = useSelector((state) => state.MovieReducer);
  // console.log(arrayMovies[0].id);
  // const { isLoadingSlider } = useSelector((state) => state.LoadingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getListMovies();
    dispatch(action);
    return () => {};
  }, []);

  //customize arrow carousel
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="carouselIndicators"
        style={{
          backgroundImage: `url(${back})`,
          left: props.left,
          top: props.top,
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="carouselIndicators"
        style={{
          backgroundImage: `url(${next})`,
          right: props.right,
          top: props.top,
        }}
        onClick={onClick}
      />
    );
  }

  const renderCardPhim = (array) => {
    return array.map((movie, index) => (
      <div key={index} className="container my-2">
        <div
          className="card custom-card"
          onClick={() => dispatch({ type: "DISPLAY_LOADING_DETAIL" })}
        >
          <NavLink to={`/detail/${movie.id}`}>
            <div className="img-movie">
              <img
                src={IMAGE_DOMAIN + movie.poster_path}
                className="card-img-top"
                style={{ height: "320px" }}
                alt={movie.original_title}
              />
            </div>
          </NavLink>

          <div className="info card-body">
            <p className="nameFilm">
              <span>P</span>
              {movie.original_title}
            </p>
            <span className="timeFilm">Score: {movie.vote_average}</span>
          </div>
        </div>
      </div>
    ));
  };

  const settings1 = {
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: false,
    rows: 2,
    slidesPerRow: 2,
    autoplaySpeed: 4600,
    nextArrow: <SampleNextArrow right="-50px" top="50%" />,
    prevArrow: <SamplePrevArrow left="-50px" top="50%" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow right="-20px" top="45%" />,
          prevArrow: <SamplePrevArrow left="-20px" top="45%" />,
        },
      },
    ],
  };

  return (
    <div style={{ maxHeight: "760px" }}>
      {/* {isLoadingSlider ? (
        <Loading size="300px" />
      ) : */}
      <Slider {...settings1}>{renderCardPhim(arrayMovies)}</Slider>
    </div>
  );
}
