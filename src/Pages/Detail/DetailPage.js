import React, { useEffect } from "react";
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Detail from "../../Components/Detail/Detail";
import ToTopBtn from "../../Components/ToTopBnt/ToTopBtn";

export default function DetailPageChild(props) {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  const onRefresh = async () => {
    return await window.location.reload();
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
          <Detail id={props.match.params.id} />
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
