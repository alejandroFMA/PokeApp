import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "./Form"
import ListPokemon from "./ListPokemon"

const SearchComponent = () => {

  const [name, setName] = useState("")

  const fetchData = async () => {
      try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const pokeData = response.data;

        
      setName(pokeData)

      }catch(error){
        console.error("Error fetching poke data:", error);      }
  }

  return<>
  <div>SearchComponent
    <Form/>
    <ListPokemon/>
    </div>
  </>
};

export default SearchComponent;
