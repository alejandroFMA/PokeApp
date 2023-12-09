import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { PokeContext } from "./context/PokeContext";
import "./App.css";
import "./styles/styles.scss"


function App() {

  const [pokemons, setPokemons] = useState([]);


  return (
    <>
    <BrowserRouter>
      <PokeContext.Provider value={{ pokemons, setPokemons }}>
        <Header />
        <Main />
        <Footer />
      </PokeContext.Provider>
    </BrowserRouter>  
    </>
  );
}

export default App;
