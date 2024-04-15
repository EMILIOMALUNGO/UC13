import React from "react"; 
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {toast} from "react-toastify"
import Header from "../../Components/Header";

import apiFront from "../../API/apiFront";

import "./produto.css"

export default function ProdutosCategoria(){
  //  const navigation = useNavigate()
// ess parte é do categorias 
    const [nomes, setNomes] = useState([''])
    const [categorias1, setCategorias1]= useState("")
  //termina aqui
  //essa parte é do produto 
  const [categorias, setCategorias] = useState([""])
  const [nome, setNome] = useState("")
  const [fabricante, setFabricante] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [preco, setPreco] = useState("")
  const [tamanho, setTamanho]= useState("")

  

  const [idcategoria, setIdCategoria] = useState([""])

  const [imagem, setImagem] = useState(null) 
  
  
    
    async function EndCategoria1(){
        
        if (!nomes) {      
            toast.bind("existem campos vazios")        
        }
        const response = await apiFront.post('/CriarCategoria',{
            nomes
        })
        setCategorias1(response.data)

        if (response) {
            toast.warn('uma categoria foi cadastrado')
             setNomes("")
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
        data.append("fabricante", fabricante)
        data.append("quantidade", quantidade)
        data.append("file", imagem)
        data.append("preco", preco)
        data.append("tamanho", tamanho)
     
        

        const response = await apiFront.post('/CriarProduto', data)
       //console.log(response)
       alert(response.data.dados)
       window.location.reload()

    } catch (err) {
        console.log(err)

    }
    setNome('')
    setFabricante('')
    setQuantidade('')
    setPreco('')
    setTamanho('')
    setImagem(null)
}

useEffect(()=>{

    async function BuscarCategotia(){
        const response =  await apiFront.get("/listarCategoria")
        setCategorias(response.data)
        return
    }
    
BuscarCategotia()
},[categorias])

    return(
        <div>
             <Header />
        <div>
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
            <h1>Produtos</h1>
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

                <label>Fabricante</label>
                <input type="test" onChange={(e) => setFabricante(e.target.value)} value={fabricante} />

                <label>Quantidade</label>
                <input type="test" onChange={(e) => setQuantidade(e.target.value)} value={quantidade} />

                <label>Preco </label>
                <input type="test" onChange={(e) => setPreco(e.target.value)} value={preco} />

                <label>Tamano</label>
                <input type="test" onChange={(e) => setTamanho(e.target.value)} value={tamanho} />

           

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