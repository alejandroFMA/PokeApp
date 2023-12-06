import React from "react";
import { useState, useRef, useEffect } from "react";



const Form = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search pokémon"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">SEND</button>
    </form>
  );
};

export default Form;

