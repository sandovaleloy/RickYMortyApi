import React, { useState } from "react";
import "./styles/ResidentForm.css";

const ResidentForm = ({ hanleSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    hanleSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form className="residentForm active" onSubmit={handleFormSubmit}>
      <input
        className="residentForm__input active"
        type="text"
        id="name"
        placeholder="Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="residentForm__btn">Search</button>
    </form>
  );
};

export default ResidentForm;
