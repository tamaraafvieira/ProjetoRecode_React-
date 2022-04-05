import React from "react";
import Header from "../../componentegenerico/Header";
import Footer from "../../componentegenerico/Footer";
import "./style.css";

function Home () {
    return (
        <div>
            <Header/>
                <div class="mb-5 container">
                    <div class="row">
                        <h2 class="text-center">
                            Venha viajar conosco!
                        </h2>
                        <div>
                            <img src="/imagens/feliz.jpg" class="img-fluid" alt=""/>                           
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;