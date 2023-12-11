import { useEffect, useState, useContext } from "react";
import { PokeContext } from '../../../context/PokeContext';
import axios from "axios";
import HomeList from "./HomeList";

const Home = () => {

  // const [nextBatch, setNexBatch] = useState(0);
  const { pokemons, setPokemons } = useContext(PokeContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchAllPokemon();
    }
  }, [pokemons]);

  const fetchAllPokemon = async () => {
    setLoading(true)
    let allPokemon = [];
  
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=800`);
      allPokemon = response.data.results;
  
      const pokemonData = await Promise.all(
        allPokemon.map(async (pokemon) => {
          const pokemonDataRes = await axios.get(pokemon.url);
          return pokemonDataRes.data;
        })
      );
  
      setPokemons(pokemonData);
      // setNexBatch(20); // Update the offset for the next fetch
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    } finally{
      setLoading(false)
    }
  };

  // // const loadMorePokemon = async () => {
  // //   try {
  // //     const response = await axios.get(
  // //       `https://pokeapi.co/api/v2/pokemon/?offset=${nextBatch}&limit=20`
  // //     );
  // //     const pokemonData = response.data.results;

  // //     const pokeData = await Promise.all(
  // //       pokemonData.map(async (pokemon) => {
  // //         const pokeResponse = await axios.get(pokemon.url);
  // //         return pokeResponse.data;
  // //       })
  // //     );

  //     setPokemons((prev) => [...prev, ...pokeData]);
  //     setNexBatch((prev) => prev + 20);
  //   } catch (error) {
  //     console.error("Error fetching Pokemon information:", error);
  //   }
  {/*nextPokemon={nextBatch}*/}  {/*loadMorePokemon={loadMorePokemon}}*/}
  // };

  
console.log(pokemons)

  return (
    <>   {loading ? 
      (<div className="pokeloading"></div>) :(<HomeList pokemons={pokemons} />)} 
     
    </>
  )
};

export default Home;
