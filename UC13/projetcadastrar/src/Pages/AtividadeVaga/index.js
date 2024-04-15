import React from "react"; 
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../Components/Header";
import {toast} from "react-toastify"


import apiFront from "../../API/apiFront";

import "./produto.css"

export default function AtividadeVaga(){
    const navigation = useNavigate()
// ess parte é do categorias 
    const [nomes, setNomes] = useState([''])
    const [categorias1, setCategorias1]= useState("")
  //termina aqui
  //essa parte é do produto 
  const [categorias, setCategorias] = useState([""])
  const [nome, setNome] = useState("")



  const [idcategoria, setIdCategoria] = useState([""])

  const [imagem, setImagem] = useState(null) 
  
  
    
    async function EndCategoria1(e){
        try{
        
        e.preventDefault()
        if (!nomes){      
            toast.warn("existem campos vazios")        
        }
        const response = await apiFront.post('/CriarCategorias',{
            nomes
        })
        if (response) {
            toast.success('uma categoria foi cadastrado')
             setNomes("")
        }
         }catch(Error){
           console.log (Error)
        }
    }
    useEffect(()=>{    
    EndCategoria1() 
    },[categorias1])


   
 

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
        const categoriaId = idcategoria

        const data = new FormData()

        data.append("nome", nome)
        data.append("file", imagem)
        data.append("categoriaId", categoriaId)
       

        const response = await apiFront.post('/CriarGradedaus', data)
       //console.log(response)
       toast.success(response.data.dados)
       window.location.reload()

    } catch (err) {
        console.log(err)

    }
    setNome('')
    setImagem(null)
}

useEffect(()=>{

    async function BuscarCategotia(){
        const response =  await apiFront.get("/ListarCategorias")
        setCategorias(response.data)
        return
    }
    
BuscarCategotia()
},[categorias])

    return(
        <div>
            <Header />
        <div className="categoria">
                <legend> Categorias</legend>
           <form  onSubmit={EndCategoria1}>
        <div>
            Nome: <input placeholder="coloca a categoria" onChange={(e)=> setNomes(e.target.value)} value={nomes}/>
        </div>
        <div>
            <button type="submit">Enviar</button>
        </div>
         </form>
        </div>

            
               

        <div className="conteinerProdutosCadastro">
        
        <div>
            <h1>Grade das UCs</h1>
        </div>

        <div>
            <form onSubmit={hancadastrar}>
                <select
                    value={idcategoria}
                    onChange={(e) => setIdCategoria(e.target.value)}>

                    <option>Selecione...</option>
                    {categorias.map((pegar) => {
                        return (
                            <option value={pegar.id} key={pegar.id}>
                                {pegar.nomes}

                            </option>

                        )

                    })}

                </select>

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