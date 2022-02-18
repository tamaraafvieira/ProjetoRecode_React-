import React from "react";
import "./style.css";


function Footer () {
    return (
        <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><a href=""> La Vie Est Belle </a></h2>
                </div>
                <div class="col-sm-2">
                    <h5>Inicio</h5>
                    <ul>
                        <li><a href="http://localhost:3000/Home">Home</a></li>
                        <li><a href="http://localhost:3000/Destino">Destino</a></li>
                        <li><a href="http://localhost:3000/Promocao">Promoções</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Sobre-nós</h5>
                    <ul>                        
                        <li><a href="http://localhost:3000/Contato">Contato</a></li>                        
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Administrador</h5>
                    <ul>
                        <li><a href="http://localhost:3000/Clientes">Clientes</a></li>                       
                    </ul>
                </div>
                <div class="col-sm-3">
                    {/* As midias sociais são somente demonstrativas */}
                    <div class="social-networks">                         
                        <a href="" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="" class="instagram"><i class="fa fa-instagram"></i></a>
                    </div>
                    <a href="http://localhost:3000/Contato">
                        <button type="button" class="btn btn-default">Contato</button>
                    </a>
                </div>
            </div>
        </div>        
    </footer>
    );
}
export default Footer;