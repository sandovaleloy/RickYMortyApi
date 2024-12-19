import React from "react";
import "./styles/LocationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <section className="location">
      <h2 className="location__name">name: {location?.name}</h2>
      <ul className="location__type">
        <li className="location__item">
          <span>Name:</span>
          {location?.name}
        </li>
        <li className="location__item">
          <span>Type:</span>
          {location?.type}
        </li>
        <li className="location__item">
          <span>Dimension:</span>
          {location?.dimension}
        </li>
        <li className="location__item">
          <span>Population:</span>
          {location?.residents.length}
        </li>
      </ul>
    </section>
  );
};

export default LocationInfo;
