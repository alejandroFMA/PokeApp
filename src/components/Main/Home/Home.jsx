import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeList from "./HomeList";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [nextBatch, setNexBatch] = useState(0);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const fetchAllPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
      const pokemonData = response.data.results;

      const pokeData = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          return pokeResponse.data;
        })
      );

      setAllPokemon(pokeData);
      setNexBatch(20); // Update the offset for the next fetch
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  const loadMorePokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${nextBatch}&limit=20`);
      const pokemonData = response.data.results;

      const pokeData = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const pokeResponse = await axios.get(pokemon.url);
          return pokeResponse.data;
        })
      );

      setAllPokemon(prev => [...prev, ...pokeData]);
      setNexBatch(prev => prev + 20); 
    } catch (error) {
      console.error("Error fetching Pokemon information:", error);
    }
  };

  return (
    <>
      <HomeList allPokemon={allPokemon} nextPokemon={nextBatch} />
      <button onClick={loadMorePokemon}>Next 20 Pokemon</button>
    </>
  );
};

export default Home;
