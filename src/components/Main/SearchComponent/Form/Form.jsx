import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Form = ({name}) => {

const [inputValue, setInputValue] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  setInputValue(name);
};

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Enter a Pokémon"
          id="demo-helper-text-misaligned"
          label="pokemon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Box>
     <button type="submit">SEND</button>
    </form>
  );
};

export default Form;
