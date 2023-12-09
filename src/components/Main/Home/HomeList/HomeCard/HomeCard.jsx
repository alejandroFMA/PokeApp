import React from "react";
import {Link} from 'react-router-dom'
import { scroll } from "react-scroll";
const HomeCard = ({id, title, image}) => {

  const scrollToTop = () => {
    scroll.scrollToTop();
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
          </article>
      
      </>
    );
  };

export default HomeCard;
