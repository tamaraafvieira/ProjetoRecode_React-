import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './ListEmployeeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';

function Cadastro() {
  return (
    <div>
        <BrowserRouter>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        </BrowserRouter>
    </div>

  );
}

export default Cadastro;