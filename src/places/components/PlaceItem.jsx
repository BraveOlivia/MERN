import React from "react";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name}></img>
    </div>
  );
};

export default PlaceItem;
