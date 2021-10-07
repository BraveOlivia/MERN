import React from "react";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <div>
      <img src={props.image} src={props.name}></img>
    </div>
  );
};

export default PlaceItem;
