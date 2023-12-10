import React from "react";
import { useState, useContext } from "react";
import Form from "./Form";
import ListPokemon from "./ListPokemon";
import { PokeContext } from "../../../context/PokeContext";


const SearchComponent = () => {
  const { pokemons } = useContext(PokeContext);
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (searchedPokemon) => {
    setLoading(true);
    setErrorMessage('');

    if (searchedPokemon.trim() === '') {
      setFilteredPokemons(null); 
      setErrorMessage('Please enter a Pokemon name.');
    } else {
      const results = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase())
      );

      if (results.length) {
        setFilteredPokemons(results);
      } else {
        setFilteredPokemons(null); 
        setErrorMessage(`No Pokemon found named "${searchedPokemon}"`);
      }
    }

    setLoading(false);
  };

  const clearList = () => {
    setFilteredPokemons(null); 
    setErrorMessage('');
  };

  
  const renderPokemons = () => {
    if (filteredPokemons) {
      return <ListPokemon pokemons={filteredPokemons} />;
    } else if (errorMessage) {
      return <h3>{errorMessage}</h3>;
    } else {
      return null; 
    }
  };

  return (
    <>
      <section className="formSearch">
        <Form onSearch={handleSearch} clearList={clearList} />
      </section>
      {loading ? <div className="pokeloading"></div> : renderPokemons()}
    </>
  );
};

export default SearchComponent;