import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../styles/components/_Create.scss";

function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [newPokemon, setNewPokemon] = useState("");

  const onSubmit = (data) => {
    setNewPokemon(data);
  };
  const clearNewPokemon = () => {
    reset();
    setNewPokemon(null);
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

  return (
    <>
      <form className="createPokemon" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create your own</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon title" />
        <TextField
          id="pokemon-id"
          label="ID"
          variant="outlined"
          placeholder="ID"
          type="number"
          className="inputCreate"
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
          helperText="Please select a type"
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
          helperText="Please select a type (optional)"
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

        <input type="submit" />
      </form>

      {newPokemon && (
        <article className="cardPokemon">
          <h3>#{newPokemon.id}</h3>
          <img src={newPokemon.image} alt={`Pokemon ${newPokemon.name}`} />
          <p className="pokeName">{newPokemon.name}</p>
          <ul>
            <li>{newPokemon.typeOne}</li>
            {newPokemon.typeTwo ? <li>{newPokemon.typeTwo}</li> : <li></li>}
          </ul>
          <Button className="deleteBtn" variant="outlined" onClick={clearNewPokemon} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </article>
      )}
    </>
  );
}

export default Create;
