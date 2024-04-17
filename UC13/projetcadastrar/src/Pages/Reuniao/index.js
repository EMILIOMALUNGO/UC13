import React from "react"; 
//import {useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../Components/Header";
import {toast} from "react-toastify"

import apiFront from "../../API/apiFront";

import "./produto.css"

export default function Reuniao(){
   // const navigation = useNavigate()
// ess parte é do categorias 
 
  //termina aqui
  //essa parte é do produto 

  const [nome, setNome] = useState("")

  const [imagem, setImagem] = useState(null) 
  
  
    async function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        //o nome da função vc é quem escolhe 
        const image = e.target.files[0]
        if (image.type === "image/png" || image.type === "image/jpeg") {
            setImagem(image)

        }
    }
  


async function hancadastrar(e) {
    //essa parte sao todos os teste que agente fez pra ver se estão funcionando 
    //console.log(nome,fabricante,quantidade,preco)
    //  console.log(idcategoria)
    // console.log(imagem)

    try {
        e.preventDefault()
       

        const data = new FormData()

        data.append("nome", nome)
        data.append("file", imagem)
       
        const response = await apiFront.post('/CriarReuniao', data)
       //console.log(response)
       toast.success(response.data.dados)
       window.location.reload()

    } catch (err) {
        console.log(err)

    }
    setNome('')
    setImagem(null)
}



    return(
        <div>
            <Header />
    
        <div className="conteinerProdutosCadastro">
        
        <div>
            <h1>Todas as Reuniões</h1>
        </div>

        <div>
            <form onSubmit={hancadastrar}>
        

                <label>nome</label>
                <input type="test" onChange={(e) => setNome(e.target.value)} value={nome} />               

                <label>Imagem</label>
                <input type="file" accept="image/jpeg, image/png" onChange={handleImagem} />

                <div>
                    <button type="submit">ENVIAR</button>
                </div>
            </form>

         

        </div>

    </div>


        </div>

    )

}