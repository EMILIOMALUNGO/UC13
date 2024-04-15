import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {toast} from "react-toastify"
import 'boxicons'
import './login.css'
import apiFront from "../../API/apiFront";
//import Cadastrar from "../Cadastrar";


export default function Login() {
    const navigation = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')


    
    async function handlecadastrar(e) {
        e.preventDefault()

        if (!email|| !password) {
            toast.warn("existem campos vazios")   
           }
        try{
            const response = await apiFront.post('/LoginUsuarios',{
                email, password
            })
            //console.log(response)
            navigation('/CadastroPessoas')

        }catch(error){
            toast.error(error.response.data.error)
            return
        }     
    }

    function Cadastrar(){
        navigation('/Cadastrar')
    }

    return (
        <div className="container">
           <div className="contain">

            <form onSubmit={handlecadastrar}>
                 <h1>Login</h1>
                <div className="input-box">
                    <input placeholder="Digita o seu email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                    <i className="bx bxs-user"></i>
                    <box-icon type='solid' Size={10} color="#fff" name='envelope'></box-icon>
                </div>

                <div className="input-box">
                    <input placeholder="coloca sua senha "   value={password} onChange={(e)=> setPassword(e.target.value)}required />
                    <box-icon type='solid' color="#fff" name='lock-alt'></box-icon>
                    
                </div>
                   
                   <div className="lembrar">
                    <label><input type="checkbox" />Me lembra</label>
                    <a href="">Esquece minha Senha?</a>
                   </div>

                <button className="blt" type="submit" >Entrar</button>
                  
                  <div className="register-link">
                      <p>Ainda não tem cadastrado? clica aqui!! <a onClick={Cadastrar}>Cadastrar</a></p>
                  </div>
                <div>
                </div>
            </form>
        </div>
        </div>
    )
}