import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonDetails(response.data); 
        
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails(); 
  }, [id]); 

  if (!pokemonDetails) {
    return <div className='notFound'>
      <h2>404 POKEMON NOT FOUND</h2>
      <img src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg"></img>
    </div>; 
  }
  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt={pokemonDetails.name} />
    </div>
  );
};

export default Detail