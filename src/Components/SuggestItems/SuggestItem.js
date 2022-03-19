import React from "react";
import "./_suggest.scss";

import CardItem from "../Card/CardItem";

export default function SuggestItem() {
  const renderList = (arrayItems) => {
    return arrayItems.map((item, index) => (
      <div className="item" key={index}>
        <CardItem title={item.title} distance={item.distance} img={item.img} />
      </div>
    ));
  };

  return (
    <div className="wrap-parent">
      <h2>Inspiration for your next trip</h2>
      {/* <div className="wrap-child">{renderList(arrayItems)}</div> */}
    </div>
  );
}
