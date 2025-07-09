import React, { useEffect, useState } from "react";
import './App.css';
import Contact from "./components/Contact";
import Contact2 from "./components/Contact2";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes, Rote} from "react-router-dom";
 
function App() {
    return (

<BrowserRouter>
      <nav className="nav">
        <div className="nav_links">
          <Link to="/" className="nav_line">Сложение</Link>
          <Link to="/about" className="nav_line">Вычитание</Link>
          <Link to="/contact" className="nav_line">Умножение</Link>
          <Link to="/contact2" className="nav_line">Деление</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/contact2' element={<Contact2 />}/>
      </Routes>
</BrowserRouter>
    )
}

export default App