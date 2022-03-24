import React from "react";
import ButtonSwitch from "../ButtonSwitch/ButtonSwitch";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import "./_filmBlock.scss";

export default function FilmBlock() {
  return (
    <div id="homeMovies" className="container text-center">
      <div className="col-xs-12 block mainMaxWidth">
        <ButtonSwitch />
        <div className="tab-content">
          <SlickCarousel />
        </div>
      </div>
    </div>
  );
}
