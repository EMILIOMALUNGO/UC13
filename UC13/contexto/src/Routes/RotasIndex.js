import { Contexts } from  '../Pages/Contexts/Contexts'
import { useContext } from 'react';
import Authroutes from './Auth.routes';

import NoAuthroutes from './NoAuth.routes';





export default function RotasIndex(){
    const {autenticado, nome} = useContext(Contexts)
    console.log(autenticado, nome)
    return(
        autenticado === true ? <Authroutes/> : <NoAuthroutes />
    )
}