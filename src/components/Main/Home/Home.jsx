import React from "react";

const Home = () => {

  

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonDetails(response.data); 
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails(); 
  }, []); 

  return <div>Home</div>;
};

export default Home;
