import {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";


import { Contexts } from "../Contexts/Contexts";

export default function DashBoard(){
    const navigation = useNavigate()
    const {autenticado, verificarToken} = useContext(Contexts)

    const [usuario, setUsuario] = useState('')

    useEffect(()=>{
        verificarToken()
        const iToken = localStorage.getItem('@tklogin24')
        if (!iToken) {
            return       
        }

        const {nome} = JSON.parse(iToken)


        setUsuario(nome)
        console.log(nome)
    })
    
    function handleSair(){
        localStorage.removeItem('@tklogin24')
        verificarToken()
    }

    return(
        <div>
            {
                autenticado===false
                ?
                navigation('/')
                :
                <div>
                    <h1>Tela de DashBoard</h1>
                    <h1>Seja bem vindo -{usuario}</h1>
                   < button onClick={() => navigation('/Produtos')}>Produtos</button>
                   < button onClick={handleSair}>Sair</button>

                </div>

            }
        </div>
    )
}