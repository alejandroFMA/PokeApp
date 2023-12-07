import { useState } from "react";
import { useForm } from "react-hook-form";

 function Create () {
  const { register, handleSubmit } = useForm();
  const [newPokemon, setNewPokemon] = useState("");

  return (
    <form onSubmit={handleSubmit((newPokemon) => setNewPokemon(JSON.stringify(newPokemon)))}>
      <input {...register("id")} placeholder="ID" />
      <input {...register("name")} placeholder="Name" />
      <input {...register("image")} placeholder="Image" />
      <input {...register("typeOne")} placeholder="Type One" />
      <input {...register("typeTwo")} placeholder="Type Two" />
      
  
      <input type="submit" />
    </form>
  );
}

export default Create