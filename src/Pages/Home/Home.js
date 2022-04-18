import React from "react";
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";
import { useDispatch, useSelector } from "react-redux";
import ButtonGrid from "../../Components/ButtonGrid/ButtonGrid";
import ButtonSwitch from "../../Components/ButtonSwitch/ButtonSwitch";
import Carousel from "../../Components/Carousel/Carousel";
import FilmBlock from "../../Components/FilmBlock/FilmBlock";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ToTopBtn from "../../Components/ToTopBnt/ToTopBtn";
import { getListMovies } from "../../Redux/Actions/MovieActions";

export default function Home() {
  const { top_rated } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const onRefresh = async () => {
    if (top_rated) {
      return await dispatch(getListMovies("top_rated"));
    } else {
      return await dispatch(getListMovies());
    }
  };
  return (
    <div style={{ overflow: "scroll" }}>
      <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={200}
        onRefresh={onRefresh}
        triggerHeight={100}
        backgroundColor="white"
      >
        <div id="basic-container">
          <Header />
          <Carousel />

          <ButtonGrid />

          <FilmBlock />

          <Footer />

          <ToTopBtn />
        </div>
        <style>{`
                    
                    #basic-label {
                        user-select: none;
                        margin-top: 20px;
                        color: aliceblue;
                        border: 1px solid aliceblue;
                        border-radius: 6px;
                        padding: 5px 2px;
                    }
                    #basic-label:hover {
                        cursor: pointer;
                    }
                `}</style>
      </PullToRefresh>
    </div>
  );
}
