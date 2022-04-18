import React from "react";
import "./_circlePercent.scss";

export default function CirclePercent(props) {
  return (
    <div className="score-circle">
      <div className={`c100 big dark p${props.percent}`}>
        <span>{props.percent}%</span>
        <div className="slice">
          <div className="bar" />
          <div className="fill" />
        </div>
      </div>
    </div>
  );
}
