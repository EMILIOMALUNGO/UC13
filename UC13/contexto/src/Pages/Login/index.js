import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify'

import { Contexts } from "../Contexts/Contexts";
import { useNavigate} from "react-router-dom";

import './login.css'

//o backEnde que estamos usar nesse exercico é da UC9  

export default function Login(){
    const navigation = useNavigate()

    const {handleLogar, verificarToken} = useContext(Contexts)

    //essa parte de baixa serve para a pessoa nao voltarar na tela de login vairias veses ele manda direito apara atela de DashBoard
    
   useEffect(()=>{
       verificarToken()
  },[])

 const [email, setEmail] = useState('')
 const [password, setPassword]= useState ("")

 async function handleLogin(e){
     try{
         e.preventDefault()
         if(!email || !password){
            toast.warn('Existem campos vasios',{
                toastId: 'toastId'
             })
            return
            }
            await handleLogar(email, password)
         //navigation('/')
        }catch(err){
            console.log(err)
            
        }
    }
    useEffect(()=>{
    handleLogin()
 },[])

    return(
        <div className='conteinerLogin'>
            <div className='cabecalhoLogin'>
            <h1>Fazer Login</h1>
            </div>
            <div className='formLogin'>
                <form onSubmit={handleLogin}>
                    
                        <input placeholder="Digita seu email" value={email} 
                        onChange={((e)=> setEmail(e.target.value))}/>
                    
                
                        <input placeholder="Digita a sua senha " value={password} 
                        onChange={((e)=> setPassword(e.target.value))}/>
                    
                    <button type="submit" >Entrar</button>
                </form>
            </div>

        </div>
    )
}