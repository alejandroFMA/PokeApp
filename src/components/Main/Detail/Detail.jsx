import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pokeballImage from '../../../assets/pokeball.png';
import axios from "axios";

const Detail = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const typePokemonColor = {
    default: '#ffffff',
    normal: '#e3e1e2',
    fire: '#d43939',
    water: '#4a5fcc',
    grass: '#39fd6b',
    ice: '#80859e',
    electric: '#f9dc36',
    poison: '#b32cbb',
    rock: '#7f7f81',
    flying: '#95e0d8',
    psychic: '#ebb6c8',
    ghost: '#481d23',
    bug: '#406341',
    dragon: '#ac540d',
    ground: '#b29665',
    fighting: '#352b2b',
    steel: '#617e8c',
    shadow:'#362a3d',
    dark: '#292828'
};

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemonDetails(response.data);

        const characteristicResponse = await axios.get(
          `https://pokeapi.co/api/v2/characteristic/${id}/`
        );
        const english = characteristicResponse.data.descriptions.find(
          (desc) => desc.language.name === "en"
        );

        if (english) {
          setDescription(english.description);
        }
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return (
      <div className="notFound">
        <h2>404 POKEMON NOT FOUND</h2>
        {/* <img src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg"></img> */}
      </div>
    );
  }
  return (
    <article className="detailCard" >
      <img
        src={pokemonDetails.sprites.other["official-artwork"].front_default}
        alt={pokemonDetails.name}
        style={{ backgroundImage: `url(${pokeballImage})` }}
      />
      <div className="info">
        <h1>
          {pokemonDetails.name.charAt(0).toUpperCase() +
            pokemonDetails.name.slice(1)}
        </h1>
        <p className="description">{description}</p>
        <h2>Types</h2>
        <ul className="types">
          {pokemonDetails.types.map((typeEntry) => (
            <li key={typeEntry.type.name}
            style={{
              backgroundColor: typePokemonColor[typeEntry.type.name] || typePokemonColor.default,
            }}>{typeEntry.type.name
            }</li>
          ))}
        </ul>
        <ul className="bodyPokemon">
          <li>Height: {(Math.floor(pokemonDetails.height) * 0.1).toFixed(2)}m</li>
          <li>Weight: {pokemonDetails.weight*0.10}kg</li>
        </ul>
            <h2>Moves</h2>
        <ul className="moves">
          {pokemonDetails.moves.slice(0, 4).map((moveEntry) => (
            <li key={moveEntry.move.name}>{moveEntry.move.name.charAt(0).toUpperCase() +
              moveEntry.move.name.slice(1)}</li>
          ))}
        </ul>
        <h2>Base Stats</h2>
        <ul className="baseStats">
          {pokemonDetails.stats.map((stat) => (
            <li
              key={stat.stat.name}>
              <label for="stat">{stat.stat.name.charAt(0).toUpperCase() +
              stat.stat.name.slice(1)}</label> 
              <progress id="stat" max="250" value={stat.base_stat}>{stat.base_stat}</progress>
              <p>{stat.base_stat}</p>
              </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Detail;
