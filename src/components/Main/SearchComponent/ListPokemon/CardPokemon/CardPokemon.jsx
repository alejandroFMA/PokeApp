import React from "react";
import { Link } from "react-router-dom";
import "../../../../../styles/components/_CardPokemon.scss";

const CardPokemon = ({ id, title, image }) => {
  return (
    <>
      
        <article className="cardPokemon">
        <h3>#{id}</h3>
        <Link
        to={`/pokemon/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={`Pokemon ${title}`} /></Link>
        <p className="pokeName">{title}</p>
        </article>
    
    </>
  );
};

export default CardPokemon;
