import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../Header/Nav';
import SearchComponent from './SearchComponent'
import Detail from './Detail'
import Home from './Home'
import Create from './Create'

const Main = () => {

  return (
    <>
 <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<SearchComponent />} />
      </Routes>
    </Router>
  </>
  )
}

export default Main;
