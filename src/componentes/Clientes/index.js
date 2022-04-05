import React, {useState, useEffect} from "react";
import Header from "../../componentegenerico/Header";
import Footer from "../../componentegenerico/Footer";
import "./style.css";
import EmployeeService from "../../services/EmployeeService";
import axios from "axios";

function Clientes () {
    const [userRegister, setUserRegister] = useState({name:"", cpf:"", email:"", rua:"", numero:"", complemento:"", cep:""});
    
    const [list, setlist] = useState([])

    const cadastrar = e => {
        e.preventDefault()
        console.log(userRegister)
        EmployeeService.createEmployee(userRegister)
        window.location.reload()
    }

    const handleChange = e =>{
        const { value } = e.target;
        setUserRegister({ ...userRegister, [e.target.name]: value });
    }
    //useEffect(() => {
        //setlist(Promise.resolve(EmployeeService.getEmployees()))
    //},[])

    
    function test () {
        return axios.get("http://localhost:8090/readAll");
    }

    useEffect(()=>{
        const getData = async ()=>{
            await test ()
            .then(response => setlist(response.data))
            .catch(error => console.log(error));
        }
        getData();
    }, []);

    console.log(list)

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
                                            <th>id</th>
                                            <th>Nome</th>
                                            <th>Cpf</th>
                                            <th>E_mail</th>
                                            <th>Rua</th>
                                            <th>Numero</th>
                                            <th>Complemento</th>
                                            <th>Cep</th>
                                            <th>Situação</th>
                                        </tr>
                                    </thead>    
                                    <tbody>

                                    {list.map(item => 
                                        <tr key = {item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.cpf}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rua}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.complemento}</td>
                                        <td>{item.cep}</td>
                                        <td>{item.situacao}</td>
                                        </tr> ) }

                                    </tbody>                                
                                </table>                                
                            
                                <hr />
                                <h2>Cadastrar</h2>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Nome completo</label>
                                            <input name="name" maxlength="40" type="text" class="form-control" placeholder="Nome Completo" value={ userRegister.name } 
                                onChange={ e => handleChange(e) } />
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cpf</label>
                                            <input name="cpf" maxlength="11" type="text" class="form-control" placeholder="000.000.000-00" value={ userRegister.cpf } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>E_mail</label>
                                            <input name="email" maxlength="40" type="text" class="form-control" placeholder="e-mail" value={ userRegister.email } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Rua</label>
                                            <input name="rua" maxlength="30" type="text" class="form-control" placeholder="Nome da Rua" value={ userRegister.rua } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Numero</label>
                                            <input name="numero" maxlength="10" type="int" class="form-control" placeholder="Número da residência" value={ userRegister.numero } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Complemento</label>
                                            <input name="complemento" maxlength="40" type="text" class="form-control" placeholder="Digite o complemento, se houver" value={ userRegister.complemento } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cep</label>
                                            <input name="cep" maxlength="9" type="text" class="form-control" placeholder="Digite seu Cep" value={ userRegister.cep} 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Situação</label>
                                            <select class="custom-select" name="situacao">
                                                <option selected>-- Selecione uma opção</option>
                                                <option value="Ativo">Ativo</option>
                                                {/* <option value="Inativo">Inativo</option> */}
                                                <option value="Bloqueado">Bloqueado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button class="btn btn-success" onClick={e => cadastrar(e)}>Incluir</button>
                                </form>
                                <br />
                                <hr />
                                <br />
                                <h2>Atualizar Dados</h2>
                                <form action="CreateAndFind" method="POST">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label>Nome completo</label>
                                            <input name="nome" maxlength="40" type="text" class="form-control" placeholder="Nome Completo" value={ userRegister.name } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Cpf</label>
                                            <input name="cpf" maxlength="11" type="text" class="form-control" placeholder="000.000.000-00" value={ userRegister.cpf } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>email</label>
                                            <input name="email" maxlength="40" type="text" class="form-control" placeholder="e-mail" value={ userRegister.email } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>rua</label>
                                            <input name="rua" maxlength="30" type="text" class="form-control" placeholder="Nome da Rua" value={ userRegister.rua } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>numero</label>
                                            <input name="numero" maxlength="10" type="int" class="form-control" placeholder="Número da residência" value={ userRegister.numero } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>complemento</label>
                                            <input name="complemento" maxlength="40" type="text" class="form-control" placeholder="Digite o complemento, se houver" value={ userRegister.complemento } 
                                onChange={ e => handleChange(e) }/>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>cep</label>
                                            <input name="cep" maxlength="9" type="text" class="form-control" placeholder="Digite seu Cep" value={ userRegister.cep } 
                                onChange={ e => handleChange(e) }/>
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
                                    <button class="btn btn-success" onClick={e => cadastrar(e)}>Atualizar</button>
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