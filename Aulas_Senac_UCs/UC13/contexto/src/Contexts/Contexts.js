import { createContext, useState } from 'react'
import apiLocal from '../Api/apiLocal'
import { toast } from 'react-toastify'

export const Contexts = createContext()

export default function AuthProvider({ children }) {

    async function handleLogar(email, password) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
            console.log(resposta)
        } catch (err) {
            toast.error(err.response.data.error, {
                toastId: 'toastId'
            })
        }
    }



    return (
        <Contexts.Provider value={{ handleLogar }} >
            {children}
        </Contexts.Provider>
    )
}