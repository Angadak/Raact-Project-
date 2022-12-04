import { Component } from "react";
import './card-contanier.css';
const Cardcontanier=({monster:{name, email, id}})=>{

return(

    <div className="card-container" key={id}>
    <img
      alt={`monster ${name}`}  
      src={`https://robohash.org/${id}?set=set2`}
    />
    <h1>{name}</h1>
    <p>{email}</p>
  </div>

)
    




}
export default Cardcontanier;
