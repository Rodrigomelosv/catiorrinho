// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./paginas/Header";
import Footer from "./paginas/Footer";
import Home from "./paginas/home";
import Sobre from './paginas/sobre';
import Pagina404 from "./paginas/Pagina404";
import "./assets/CSS/base/base.css";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <Footer/>
     </Router>
  )
};


export default App;
