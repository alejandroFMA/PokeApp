import React from "react";
import HomeCard from './HomeCard'

const HomeList = ({allPokemon}) => {

  return (
  
    <section className="list_pokemon">
      {allPokemon.map(pokemon => (
        <HomeCard 
          key={pokemon.id}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          image={pokemon.sprites.other["official-artwork"].front_default}
          id={pokemon.id}
        />
      ))}
    </section>
  );
};

export default HomeList;
