import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";
import { useState, useRef, useEffect } from "react";

const Form = ({ onSearch, clearList }) => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    const temporizador = setTimeout(() => {
      if (inputValue !== previousInputValue.current) {
        onSearch(inputValue);
        previousInputValue.current = inputValue;
      }
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, [inputValue, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h1>Search Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="pokemon-name"
          placeholder="Search Pokemon"
          label="Name"
          variant="outlined"
          type="text"
          className="inputSearch"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button type="submit">Send</Button>
          <Button type="button" onClick={clearList}>
            Clear List
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Form;
