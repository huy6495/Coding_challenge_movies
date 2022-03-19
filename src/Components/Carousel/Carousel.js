import { Button } from "@mui/material";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./_carousel.scss";

export default function Carousel() {
  return (
    <div className="wrap-carousel d-flex">
      <div className="inside-carousel ">
        <h1 className="text-light">Welcome.</h1>
        <h2 className="text-light">
          Millions of movies on theaters. Explore now.
        </h2>
        <div className="mx-auto text-center">
          <SearchBox />
        </div>
      </div>
    </div>
  );
}
