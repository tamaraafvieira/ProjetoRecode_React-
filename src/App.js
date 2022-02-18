import React from "react";
import Home from "./componentes/Home";
import Contato from "./componentes/Contato";
import Destino from "./componentes/Destino";
import Promocao from "./componentes/Promocao";
import Clientes from "./componentes/Clientes";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {

  const url = window.location.href;

  return (
    <div>
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
    </div>
  );
}

export default App;
