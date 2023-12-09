import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useContext } from "react";
import { PokeContext } from "../../../context/PokeContext";
import { useForm } from "react-hook-form";
import "../../../styles/components/_Create.scss";

function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {pokemons, setPokemons} = useContext(PokeContext)
  

  const onSubmit = (data) => {
    setPokemons((pokemons => [...pokemons, data]));
    reset();
  };
  const clearNewPokemon = () => {
    reset();
    setPokemons([]);
  };

  console.log(errors);

  const types = [
    { value: "normal", label: "Normal" },
    { value: "fighting", label: "Fighting" },
    { value: "flying", label: "Flying" },
    { value: "poison", label: "Poison" },
    { value: "ground", label: "Ground" },
    { value: "rock", label: "Rock" },
    { value: "bug", label: "Bug" },
    { value: "ghost", label: "Ghost" },
    { value: "steel", label: "Steel" },
    { value: "fire", label: "Fire" },
    { value: "water", label: "Water" },
    { value: "grass", label: "Grass" },
    { value: "electric", label: "Electric" },
    { value: "psychic", label: "Psychic" },
    { value: "ice", label: "Ice" },
    { value: "dragon", label: "Dragon" },
    { value: "dark", label: "Dark" },
    { value: "fairy", label: "Fairy" },
    { value: "unknown", label: "Unknown" },
    { value: "shadow", label: "Shadow" },
  ];

  const typePokemonColor = {
    default: "#ffffff",
    normal: "#e3e1e2",
    fire: "#d43939",
    water: "#4a5fcc",
    grass: "#39fd6b",
    ice: "#80859e",
    electric: "#f9dc36",
    poison: "#b32cbb",
    rock: "#7f7f81",
    flying: "#95e0d8",
    psychic: "#ebb6c8",
    ghost: "#481d23",
    bug: "#406341",
    dragon: "#ac540d",
    ground: "#b29665",
    fighting: "#352b2b",
    unknown: "#fae4b1",
    steel: "#617e8c",
    shadow: "#362a3d",
    dark: "#292828",
  };

  return (
    <>
      <form className="createPokemon" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create your own</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon title"
        />
        <TextField
          id="pokemon-id"
          label="ID"
          variant="outlined"
          placeholder="ID"
          type="number"
          helperText="Choose from 1293"
          className="inputCreate"
          inputProps={{ min: 1293}}
          {...register("id", { required: true })}
        />
        <TextField
          id="pokemon-name"
          label="Name"
          variant="outlined"
          placeholder="Name"
          type="text"
          className="inputCreate"
          {...register("name", { required: true, minLength: 3 })}
        />
        <TextField
          id="pokemon-image"
          label="Image"
          variant="outlined"
          placeholder="Image URL"
          type="url"
          className="inputCreate"
          {...register("image", { required: true })}
        />

        <TextField
          id="type-one-select"
          select
          label="Type One"
          helperText="Please select a type (required)"
          defaultValue=""
          className="inputCreate"
          {...register("typeOne", { required: true })}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="type-two-select"
          select
          label="Type Two"
          helperText="Select a second type (optional)"
          defaultValue=""
          className="inputCreate"
          {...register("typeTwo")}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button type="submit">Send</Button>
          <Button type="button" onClick={clearNewPokemon}>
            Clear List
          </Button>
        </ButtonGroup>
      </form>

    <section className="section-create">
      {pokemons.map((pokemon) => (
        <article className="cardNewPokemon" key={pokemon.id}>
          <h3>#{pokemon.id}</h3>
          <img src={pokemon.image} alt={`Pokemon ${pokemon.name}`} />
          <p className="pokeName">{pokemon.name}</p>
          <ul className="typesCreate">
            <li className="type-item">
              <div
                style={{
                  background:
                    typePokemonColor[pokemon.typeOne] ||
                    typePokemonColor.default,
                }}
              >
                {pokemon.typeOne}
              </div>
              {pokemon.typeTwo ? (
                <div 
                className="typeOneColor"
                  style={{
                    background:
                      typePokemonColor[pokemon.typeTwo] ||
                      typePokemonColor.default,
                  }}
                >
                  {pokemon.typeTwo}
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
            </li>
          </ul>
        </article>
    ))}
    </section>         
    </>
  );
}

export default Create;
