import React from "react";
import {Link} from 'react-router-dom'
import { scroll } from "react-scroll";
const HomeCard = ({id, title, image, types}) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
    return (
      <>
          <article className="cardPokemon">
          <h3>#{id}</h3>
          <Link
          to={`/pokemon/${id}`}
          onClick={scrollToTop}
          style={{ textDecoration: "none", color: "inherit" }}>
          <img src={image} alt={`Pokemon ${title}`} /></Link>
          <p className="pokeName">{title}</p>
          <ul className="typesCreate">
          {types.map((type) => (
          <span className={type}>{type}</span>
           ))}
          </ul>

          </article>
      
      </>
    );
  };

export default HomeCard;
