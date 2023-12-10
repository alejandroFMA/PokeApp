import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useContext } from "react";
import { PokeContext } from "../../../context/PokeContext";
import { useForm } from "react-hook-form";
import "../../../styles/components/_Create.scss";
import Alert from '@mui/material/Alert';

function Create() {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const {setPokemons} = useContext(PokeContext)
  const [isPokemonCreated, setIsPokemonCreated] = useState(false);

  

  const onSubmit = (data) => {

    if (data.typeOne === data.typeTwo) {
      alert("Type One and Type Two cannot be the same"); 
      return; 
    }

    const newPokemon = {
      id: data.id,
      name: data.name,
      sprites: {
        other: {
          "official-artwork": {
            front_default: data.image
          }
        }
      },
      types: [{ type: { name: data.typeOne } }, { type: { name: data.typeTwo } }],
    };

  
    setPokemons((pokemons => [newPokemon, ...pokemons]));
    setIsPokemonCreated(true)
    reset();
  };
  
  const clearNewPokemon = () => {
    setIsPokemonCreated(false)
    reset();
  };


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
          helperText="Start from 1293"
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
        {isPokemonCreated && (
        <Alert variant="filled" severity="success">
          Pokemon has been created!
        </Alert>
      )}
      </form>
     
    

    </>
  );
 }

export default Create;
