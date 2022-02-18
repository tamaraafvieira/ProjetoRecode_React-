import React from "react";
import Header from "../../componentegenerico/Header";
import Footer from "../../componentegenerico/Footer";
import "./style.css";

function Contato () {
    return (
        <div>
            <Header/>
                <div class="altura">
                    <h2>Contato</h2>
                    <br/>
                    <div>
                        <h3>Telefone: (21) 99999-9999</h3>
                        <h3>E-mail: contato@lavieestbelle.br</h3>
                        <h3>Endereço: Rua Joaquina, 123, Centro, Rio de Janeiro, Cep.: 2222-222</h3>
                        <br/>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
export default Contato;