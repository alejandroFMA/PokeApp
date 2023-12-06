import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { PokeContext } from "./context/PokeContext";
import "./App.css";

function App() {

  const [pokemons, setPokemons] = useState([]);

  
  return (
    <>
      <PokeContext.Provider value={{ pokemons, setPokemons }}>
        <Header />
        <Main />
        <Footer />
      </PokeContext.Provider>
    </>
  );
}

export default App;
