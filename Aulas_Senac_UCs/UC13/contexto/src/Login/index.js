import { useState, useContext } from 'react'
import { Contexts } from '../Contexts/Contexts'
import { toast } from 'react-toastify'

export default function Login() {

    const { handleLogar } = useContext(Contexts)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e) {
        try {
            e.preventDefault()
            if (!email || !password) {
                toast.warn('Existem Campos em Branco', {
                    toastId: 'toastId'
                })
                return
            }
            await handleLogar(email, password)
        } catch (err) {
           //console.log(err)
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder='Digite o Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}