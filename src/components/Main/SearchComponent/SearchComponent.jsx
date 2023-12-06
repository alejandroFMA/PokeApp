import React from "react";
import axios from 'axios';
import { useState, useContext } from "react";
import Form from "./Form";
import ListPokemon from "./ListPokemon";
import { PokeContext } from "../../../context/PokeContext";
import "../../../styles/components/_SearchComponent.scss"

const SearchComponent = () => {

  const {pokemons, setPokemons} = useContext(PokeContext)


  const fetchPokemon = async (searchedPokemon) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon.toLowerCase()}`);
      console.log(response)

      const newPokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other["official-artwork"].front_default
      };

      console.log(newPokemon)

      
      setPokemons(prevPokemons =>[newPokemon, ...prevPokemons ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
    <ListPokemon pokemons={pokemons}/>
    </div>
  </>
};

export default SearchComponent;
