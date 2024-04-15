import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../API/apiLocal/api'

export const AuthContext = createContext()

export default function AuthProvider({ children }){

    const [ user, setUser ] = useState('')
    const isAutenthicated = !!user

    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)

    async function loginToken(){
        try {
            const resposta = await api.get('/ListarUsuarioToken', {
               headers:{
                Authorization: 'Bearer ' + `${token}`
               } 
            })
            //console.log(resposta)
            setUser(resposta.data.id)

        } catch (err) {
            //console.log(err.response.status)            
            if(err.response.status === 401){
                setUser('')
            }            
        }
    }
    //console.log(isAutenthicated)
    



    async function signIn({ email, password }){
        try {
            const resposta = await api.post('/LoginUsuarios',{
                email,
                password
            })
            return resposta
            
        } catch (err) {
          // toast.error("Erro ao Fazer Login")
        }
    }
    return(
        <AuthContext.Provider value={{ signIn, loginToken }}>
            {children}
        </AuthContext.Provider>
    )
}