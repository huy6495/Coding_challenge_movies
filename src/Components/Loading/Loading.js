import React, { useEffect } from "react";
import "./_loading.scss";

export default function Loading(props) {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="text-center">
      <div className="wrap-loading">
        <div
          className="loadingio-spinner-eclipse-fri095hqo15"
          style={{ width: props.size, height: props.size }}
        >
          <div className="ldio-d3k1hgwy2fs">
            <div />
          </div>
        </div>
        <div className="content-loading">Loading...</div>
      </div>
    </div>
  );
}
