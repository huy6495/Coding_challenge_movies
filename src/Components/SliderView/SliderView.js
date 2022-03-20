import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
// import PlayButton from "../PlayButton/PlayButton";

//import action to middleware
import { getListMovies } from "../../Redux/Actions/MovieActions";
import { NavLink } from "react-router-dom";

//import imgs
import back from "../../Assets/Img/back-session.png";
import next from "../../Assets/Img/next-session.png";

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

//slick setting
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

const settings2 = {
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 3,
  autoplay: false,
  rows: 1,
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

export default function SliderView(props) {
  const { gridView } = useSelector((state) => state.UserReducer);

  console.log(gridView);

  const { arrayMovies } = props;

  const renderCardPhim = (array, heightImage = "320px") => {
    return array.map((movie, index) => (
      <div key={index} className="container my-2">
        <div className="card custom-card">
          <NavLink to={`/detail/${movie.id}`}>
            <div className="img-movie">
              {heightImage === "550px" ? (
                <span className="content-in-img">{movie.overview}</span>
              ) : (
                ""
              )}

              <img
                src={movie.poster_path}
                className="card-img-top"
                style={{ height: heightImage }}
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

  return (
    <>
      {gridView ? (
        <Slider {...settings2}>{renderCardPhim(arrayMovies, "550px")}</Slider>
      ) : (
        <Slider {...settings1}>{renderCardPhim(arrayMovies)}</Slider>
      )}
    </>
  );
}
