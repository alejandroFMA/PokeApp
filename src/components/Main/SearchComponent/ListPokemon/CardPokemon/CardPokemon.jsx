import React from "react";
import "../../../../../styles/components/_CardPokemon.scss"

const CardPokemon = ({id, title, image}) => {
  
  return <>
  <article className="cardPokemon">
    <h3>#{id}</h3>
    <img src={image} ></img>
    <p className="pokeName">{title}</p>
  </article>
  </>
};

export default CardPokemon;
