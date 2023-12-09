import React from "react";
import HomeCard from './HomeCard'
import Button from '@mui/material/Button';

const HomeList = ({allPokemon,loadMorePokemon}) => {

  return (
  
    <section className="homeListPokemon">
      {allPokemon.map(pokemon => (
        <HomeCard 
          key={pokemon.id}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          image={pokemon.sprites.other["official-artwork"].front_default}
          id={pokemon.id}
        />
      ))}
     <div className="btnContainer">
      <Button variant="contained"
      type="button" 
      className="btnMore" 
      onClick={loadMorePokemon}     
      >Next 20 Pokemon</Button>
      </div>
    </section>
  );
};

export default HomeList;
