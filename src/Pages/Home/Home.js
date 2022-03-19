import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FilmBlock from "../../Components/FilmBlock/FilmBlock";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <FilmBlock />
      <Footer />

      {/* <Carousel2 /> */}
      {/* <SuggestItem />
      <FutureGateway /> */}
    </>
  );
}
