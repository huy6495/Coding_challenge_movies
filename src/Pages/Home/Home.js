import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Carousel2 from "../../Components/Carousel2/Carousel2";
import Footer from "../../Components/Footer/Footer";
import FutureGateway from "../../Components/FutureGateway/FutureGateway";
import Header from "../../Components/Header/Header";
import SlickCarousel from "../../Components/SlickCarousel/SlickCarousel";
import SlickFilms from "../../Components/SliderFilms/FilmBlock";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <SlickFilms />
      <Footer />

      {/* <Carousel2 /> */}
      {/* <SuggestItem />
      <FutureGateway /> */}
    </>
  );
}
