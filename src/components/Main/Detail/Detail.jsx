import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PokeContext } from "../../../context/PokeContext";
import pokeballImage from '../../../assets/pokeball.png';
import axios from "axios";

const Detail = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { pokemons } = useContext(PokeContext);
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const existingPokemon = pokemons.find(pokemon => pokemon.id.toString() === id);

    if (existingPokemon) {
      setPokemonDetails(existingPokemon);
      if (existingPokemon.id <= 1292) {
        fetchDescription(id);
      }
    }
    setTimeout(() => {
      setLoading(false); 
    }, 1500);
  }, [id, pokemons])

  const fetchDescription = async (pokemonId) => {
    try {
      const characteristicResponse = await axios.get(`https://pokeapi.co/api/v2/characteristic/${pokemonId}/`);
      const englishDescription = characteristicResponse.data.descriptions.find(
        desc => desc.language.name === "en"
      );

      if (englishDescription) {
        setDescription(englishDescription.description);
      }
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  let imageUrl = pokemonDetails.sprites?.other["official-artwork"]?.front_default || pokeballImage;
  const isCreatedPokemon = pokemonDetails.id > 1292;

  return  (
    loading ? (
      <div className="pokeloading"></div>
    ) : (
    pokemonDetails ? (
    <article className="detailCard"
    style={{ backgroundImage: `url(${pokeballImage})` }}>
      <img src={imageUrl} alt={pokemonDetails.name}
       />
      <div className="info">
        <h1>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h1>
        <p className="description">{isCreatedPokemon ? "????" : description}</p>
        <h2>Types</h2>
        <ul className="types">
          {pokemonDetails.types ? pokemonDetails.types.map((typeEntry) => (
            <li key={typeEntry.type.name} className={typeEntry.type.name}>
              {typeEntry.type.name}
            </li>
          )) : <li>????</li>}
        </ul>
        <h2>Height & Weight</h2>
        <ul className="bodyPokemon">
          <li>Height: {isCreatedPokemon ? "????" : `${(Math.floor(pokemonDetails.height) * 0.1).toFixed(2)}m`}</li>
          <li>Weight: {isCreatedPokemon ? "????" : `${pokemonDetails.weight * 0.10}kg`}</li>
        </ul>
        <h2>Moves</h2>
        <ul className="moves">
          {pokemonDetails.moves ? pokemonDetails.moves.slice(0, 4).map((moveEntry) => (
            <li key={moveEntry.move.name}>{moveEntry.move.name.charAt(0).toUpperCase() + moveEntry.move.name.slice(1)}</li>
          )) : <li>????</li>}
        </ul>
        <h2>Base Stats</h2>
        <ul className="baseStats">
          {isCreatedPokemon ? <li>????</li> : 
            pokemonDetails.stats.map((stat) => (
              <li key={stat.stat.name}>
                <label htmlFor="stat">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</label>
                <progress id="stat" max="252" value={stat.base_stat}>{stat.base_stat}</progress>
                <p>{stat.base_stat}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </article>
    ) : (
        <div>Not found...</div>
       )
     )
    );
 };

export default Detail;
