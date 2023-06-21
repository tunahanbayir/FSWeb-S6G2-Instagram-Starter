import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
 
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((gonderi) => (
        <Gonderi gonderi={gonderi} gonderiyiBegen={gonderiyiBegen} />
      ))}
      
    </div>
  );
};

export default Gonderiler;
