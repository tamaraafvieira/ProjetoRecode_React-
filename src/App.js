import React from "react";
import Home from "./componentes/Home";
import Contato from "./componentes/Contato";
import Destino from "./componentes/Destino";
import Promocao from "./componentes/Promocao";
import Clientes from "./componentes/Clientes";
import Cadastro from "./components/Cadastro";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  //const url = window.location.href;

  return (
    /*<div>
      {       
        url === 'http://localhost:3000/Home' 
        ? <Home/>
        : url === 'http://localhost:3000/Destino' 
        ? <Destino/>
        : url === 'http://localhost:3000/Promocao' 
        ? <Promocao/>
        : url === 'http://localhost:3000/Contato' 
        ? <Contato/>        
        : url === 'http://localhost:3000/Clientes'        
        ? <Clientes/>        
        : 'Erro'
      }
    </div>*/
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Destino" element={<Destino/>}></Route>
      <Route path="/Promocao" element={<Promocao/>}></Route>
      <Route path="/Contato" element={<Contato/>}></Route>
      <Route path="/Clientes" element={<Clientes/>}></Route>           
      <Route path="/" element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
