import React from "react";
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";
import { useDispatch } from "react-redux";
import Carousel from "../../Components/Carousel/Carousel";
import FilmBlock from "../../Components/FilmBlock/FilmBlock";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function Home() {
  const dispatch = useDispatch();

  const onRefresh = async () => {
    return await dispatch({ type: "REFRESH_LIST" });
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
          <FilmBlock />
          <Footer />
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
