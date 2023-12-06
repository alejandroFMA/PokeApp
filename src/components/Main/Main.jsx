import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import Detail from "./Detail";
import Home from "./Home";
import Create from "./Create";
const Main = () => {
  return (
    <>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/pokemon/:id" element={<Detail />} />
            <Route path="/search" element={<SearchComponent />} />
          </Routes>
      </main>
    </>
  );
};

export default Main;
