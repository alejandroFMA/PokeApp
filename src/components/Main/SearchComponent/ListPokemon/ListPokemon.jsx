import React from "react";
import CardPokemon from "./CardPokemon"



const ListPokemon = ({pokemons}) => {

  console.log(pokemons)

  return (
  
    <section className="list_pokemon">
      {pokemons.map(pokemon => (
        <CardPokemon 
          key={pokemon.id}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          image={pokemon.image}
          id={pokemon.id}
        />
      ))}
    </section>
  );
};

export default ListPokemon;
