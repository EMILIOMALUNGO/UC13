
import { createContext, useState, useEffect} from "react";
import {toast} from 'react-toastify'

import apiFront from '../API/apiFront'

export const Contexts = createContext()

export default function AuthProvider({ children }){
   
    const [token, setToken] = useState(false)

    const autenticado= !!token

    async function verificarToken(){
        const iToken = localStorage.getItem('@tklogin24')
        if (!iToken) {
            setToken(false)
            return     
        }
    
        const { token }= JSON.parse(iToken)
        
        const response =await apiFront('/ListarUsuarioToken',{
            headers: {
                Authorization: 'Bearer ' + `${token}`
            }
        })
             // console.log(response.data)
     
     if (response.data.id) {
        setToken(true)   
     }else{
        setToken(false)
     }
    }

    async function handleLogar(email, password){
       try{
        const response = await apiFront.post('/LoginUsuarios',{
            email , password
        })
       
        //console.log(response.data)
        const data = response.data
        localStorage.setItem('@tklogin24', JSON.stringify(data))
        setToken(true)
       }catch(err){
        toast.error(err.response.data.error,{
         toastId: 'toastId'

     }) 
       }
    }

   return(
    <Contexts.Provider value={{ handleLogar, autenticado, verificarToken }}>
        {children}
    </Contexts.Provider>
       ) 
    
}