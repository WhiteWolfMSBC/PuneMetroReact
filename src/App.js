import './App.css';
import React, { Component }  from 'react';
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home';
import Album from './Components/Album/Album'
import Todos from './Components/Todos/Todos'
import Product from './Components/Product/Product'

import {
  BrowserRouter as Router, Routes, Route,

} from 'react-router-dom';


function App() {
  return (
    <div>


      {/* Routes */}

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/album" element={<Album/>} />
          <Route exact path="/todos" element={<Todos/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
