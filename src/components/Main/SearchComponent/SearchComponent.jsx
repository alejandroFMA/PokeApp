import React from "react";
import axios from 'axios';
import { useState, useContext } from "react";
import Form from "./Form";
import ListPokemon from "./ListPokemon";
import { PokeContext } from "../../../context/PokeContext";
import "../../../styles/components/_SearchComponent.scss"

const SearchComponent = () => {

  const {pokemons, setPokemons} = useContext(PokeContext)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const fetchPokemon = async (searchedPokemon) => {
    setLoading(true)
    setErrorMessage('');

    if (pokemons.some(pokemon => pokemon.name.toLowerCase() === searchedPokemon.toLowerCase())) {
      setErrorMessage(`You already searched ${searchedPokemon}`);
      setLoading(false)    
      return;
    }

    const delay = 1000
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`);
      console.log(response)

      const newPokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other["official-artwork"].front_default
      };

      
      setPokemons(prevPokemons =>[newPokemon, ...prevPokemons ]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(`${searchedPokemon} not found`);
      setLoading(false)  
    } finally{
      setTimeout(() => setLoading(false), delay);    }
  };


  const handleSearch = (searchedPokemon) => {
    fetchPokemon(searchedPokemon)

  }


  const clearList = () => {

    setPokemons([])
  }


  return<>
  <div>
    <Form
    onSearch={handleSearch}/>
    <button type="button" onClick={clearList}>CLEAR</button>
    {errorMessage && <h3>{errorMessage}</h3>}
    {loading ? <div className="pokeloading"></div> : <ListPokemon pokemons={pokemons} />}
    </div>
  </>
};

export default SearchComponent;
