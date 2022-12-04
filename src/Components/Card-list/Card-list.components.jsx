import { Component } from "react";
import Cardcontanier from "../Card-contanier/card-contanier";

import "./card-list.style.css";
const Cardlist = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Cardcontanier monster={monster} />;
      })}
    </div>
  );
};
export default Cardlist;
