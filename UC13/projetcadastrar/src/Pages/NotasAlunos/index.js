import React from "react"; 
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../Components/Header";
import {toast} from "react-toastify"


import apiFront from "../../API/apiFront";

import "./produto.css"

export default function NotasAlunos (){
    const navigation = useNavigate()
// ess parte é do categorias 
    const [nomes, setNomes] = useState([''])
    const [categorias1, setCategorias1]= useState("")
  //termina aqui
  //essa parte é do produto 
  const [categorias, setCategorias] = useState([""])
  const [nome, setNome] = useState("")
  const [ra, setRa] =  useState('')
  const [notaB1, setNotaB1]= useState ('')
  const [notaB2, setNotaB2] = useState('')
  const [notaB3, setNotaB3 ] = useState ('')
  const [media, setMedia] = useState ("") 
  const [falta, setFalta] = useState("")
   
  const [idcategoria, setIdCategoria] = useState([""])

  const [imagem, setImagem] = useState(null) 
  
  
    
    async function EndCategoria1(e){
        try{      
        e.preventDefault()
        if (!nomes) {      
            toast.warn("existem campos vazios")        
        }
        const response = await apiFront.post('/CriarCategorias',{
            nomes
        })
        if (response) {
            toast.success('uma categoria foi cadastrado')
             setNomes("")
        }}catch(error){

        
    }}
    useEffect(()=>{    
    EndCategoria1() 
    },[categorias1])
 

    


async function hancadastrar(e) {
    //essa parte sao todos os teste que agente fez pra ver se estão funcionando 
    //console.log(nome,fabricante,quantidade,preco)
    //  console.log(idcategoria)
    // console.log(imagem)

    try {
        e.preventDefault()
        const categoriaId = idcategoria

        const response = await apiFront.post('/CriarNota',{
            nome,ra,notaB1,notaB2,notaB3,media,falta,categoriaId 
        })
       console.log(response.data)
       toast.success(response.data.dados)
       window.location.reload()

    } catch (error) {
        console.log(error.response.data)

    }
    setNome('')
    setRa  ('')
    setNotaB1('')
    setNotaB2('')
    setNotaB3('')
    setMedia('')
    setFalta('')  
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
            <h1>Nota dos Alunos</h1>
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

                <label>RA</label>
                <input type="test" onChange={(e) => setRa(e.target.value)} value={ra} />

                <label>NotaB1</label>
                <input type="test" onChange={(e) => setNotaB1(e.target.value)} value={notaB1} />

                <label>NotaB2</label>
                <input type="test" onChange={(e) => setNotaB2(e.target.value)} value={notaB2} />

                <label>NotaB3</label>
                <input type="test" onChange={(e) => setNotaB3(e.target.value)} value={notaB3} />

                <label>Media</label>
                <input type="test" onChange={(e) => setMedia(e.target.value)} value={media} />

                <label>Faltas</label>
                <input type="test" onChange={(e) => setFalta(e.target.value)} value={falta} />


                <div>
                    <button type="submit">ENVIAR</button>
                </div>
            </form>

         

        </div>

    </div>


        </div>

    )

}