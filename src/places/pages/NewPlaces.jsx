import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlaces.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        errorMessage="Please enter valid input"
      />
    </form>
  );
};

export default NewPlace;
