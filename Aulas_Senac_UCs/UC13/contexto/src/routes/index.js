import { useContext } from 'react'
import { Contexts } from '../Contexts/Contexts'
import NoAuthRoutes from '../routes/noAuth.routes'
import AuthRoutes from '../routes/auth.routes'

export default function RotasIndex() {

    const { autenticado, nome } = useContext(Contexts)
    console.log(autenticado, nome)
   
    
    return (
        autenticado === true ? <AuthRoutes /> : <NoAuthRoutes />
    )
}