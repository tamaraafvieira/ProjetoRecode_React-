import React from "react";
import Header from "../../componentegenerico/Header";
import Footer from "../../componentegenerico/Footer";
import "./style.css";

function Clientes () {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="d-flex justify-content-center"> 
                        <h2>Lista de clientes cadastrados</h2>
                    </div>                
                <br/>    
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h2>Clientes Cadastrados</h2>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>CodigoCliente</th>
                                            <th>Nome</th>
                                            <th>Cpf</th>
                                            <th>E_mail</th>
                                            <th>Rua</th>
                                            <th>Numero</th>
                                            <th>Complemento</th>
                                            <th>Cep</th>
                                        </tr>
                                    </thead>                                    
                                </table>                                
                            
                                <hr />
                                <h2>Cadastrar</h2>
                                <form action="CreateAndFind" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Nome completo</label>
                                            <input name="nome" maxlength="40" type="text" class="form-control" placeholder="Nome Completo"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cpf</label>
                                            <input name="Cpf" maxlength="11" type="text" class="form-control" placeholder="000.000.000-00"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>E_mail</label>
                                            <input name="E_mail" maxlength="40" type="text" class="form-control" placeholder="e-mail"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Rua</label>
                                            <input name="Rua" maxlength="30" type="text" class="form-control" placeholder="Nome da Rua"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Numero</label>
                                            <input name="Numero" maxlength="10" type="int" class="form-control" placeholder="Número da residência"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Complemento</label>
                                            <input name="Complemento" maxlength="40" type="text" class="form-control" placeholder="Digite o complemento, se houver"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cep</label>
                                            <input name="Cep" maxlength="9" type="text" class="form-control" placeholder="Digite seu Cep"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Situação</label>
                                            <select class="custom-select" name="situacao">
                                                <option selected>-- Selecione uma opção</option>
                                                <option value="Ativo">Ativo</option>
                                                <option value="Inativo">Inativo</option>
                                                <option value="Bloqueado">Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success">Incluir</button>
                                </form>
                                <br />
                                <hr />
                                <br />
                                <h2>Atualizar Dados</h2>
                                <form action="CreateAndFind" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Nome completo</label>
                                            <input name="nome" maxlength="40" type="text" class="form-control" placeholder="Nome Completo"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cpf</label>
                                            <input name="Cpf" maxlength="11" type="text" class="form-control" placeholder="000.000.000-00"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>E_mail</label>
                                            <input name="E_mail" maxlength="40" type="text" class="form-control" placeholder="e-mail"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Rua</label>
                                            <input name="Rua" maxlength="30" type="text" class="form-control" placeholder="Nome da Rua"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Numero</label>
                                            <input name="Numero" maxlength="10" type="int" class="form-control" placeholder="Número da residência"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Complemento</label>
                                            <input name="Complemento" maxlength="40" type="text" class="form-control" placeholder="Digite o complemento, se houver"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cep</label>
                                            <input name="Cep" maxlength="9" type="text" class="form-control" placeholder="Digite seu Cep"/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Situação</label>
                                            <select class="custom-select" name="situacao">
                                                <option selected>-- Selecione uma opção</option>
                                                <option value="Ativo">Ativo</option>
                                                <option value="Inativo">Inativo</option>
                                                <option value="Bloqueado">Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success">Atualizar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br/>
            <Footer/>
        </div>
    );
}
export default Clientes;