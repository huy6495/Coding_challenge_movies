import React, { useEffect } from "react";
import "./_loading.scss";

export default function Loading(props) {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <div
        className="loadingio-spinner-eclipse-fri095hqo15"
        style={{ width: props.size, height: props.size }}
      >
        <div className="ldio-d3k1hgwy2fs">
          <div />
        </div>
      </div>
      <div style={{ color: "gray" }}>Loading...</div>
    </div>
  );
}
