import React from "react";
import ResidentCard from "./ResidentCard";
import "./styles/ResidentList.css";

const ResidentList = ({ pagination }) => {
  return (
    <section className="residentsList">
      {pagination()?.map((residentUrl) => (
        <ResidentCard key={residentUrl} residentUrl={residentUrl} />
      ))}
    </section>
  );
};

export default ResidentList;
