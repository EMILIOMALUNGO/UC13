import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import Header from "../../Components/Header";
import apiFront from "../../API/apiFront";

import "./balcao.css"



export default function Balcao() {

  const navigation = useNavigate()

  const [pedido, setPedido] = useState([''])
  const [produto, setProduto] = useState([''])
  const [apagarPed, setApagarPed] = useState([''])



  useEffect(() => {
    async function handlePedido() {
     const response = await apiFront.get('/listarPedido')
      setPedido(response.data)       
   }
   handlePedido()
 }, [pedido])


 

  async function handleAceitar(id){
  try{
      const status ='confirmado'
        const aceito=false
        let draft=false
        let data = {
         id,status,aceito,draft
       }
         const response = await apiFront.put('/alterarPedido',data)
           setProduto(response.data)
       // console.log(response.data)
       ///navigation('/Cozinha')
      ///await localStorage.setItem('@cozinha', JSON.stringify(response.data))

        }catch(Error){
        console.log(Error.response)
        return
        }
        handleAceitar()
  }

  
  

  async function  handleExcluir(id){  
    try{
      const response = await apiFront.delete(`/apagarPedido/${id}`)
      setApagarPed(response.data)
      //console.log(response.data)
      
    } catch(Error){
     // console.log(Error.response.data)
    }
 
  }
  

  //obs: sempre que voce vai mandar o id para outra pagin tens que colocar id na rota ex: cozinha/:id


  return (
    <div>
      <Header />
          <div className="conatinerbalcao">
            {
              <div className="pedido">
                 <h1>Pedidos Feitos pelos Clientes</h1>
                    {
                      pedido.map((iteme)=>{
                        return(
                          <div>
                             <div>
                              { iteme.aceito===false && iteme.draft===true &&(
                             <tr className="pedir" key={iteme.id}>
                            <div className="centro">
                              <table border="1">
                                <td className="info">N:{iteme.numero_do_pedido}</td>
                                {iteme.clientes && <td className="info">Nome do Cliente: {iteme.clientes.nome}</td>}
                                {iteme.clientes && <td className="info">celular: {iteme.clientes.celular}</td>}
                               <td className="info">Data:{iteme.update_at}</td>
                               <td className="info">status:{iteme.status}</td>
                              
                            <button  className="infoBotao1"  onClick={(() => handleAceitar(iteme.id))}>Aceitar</button>
                               <button className="infoBotao2"  onClick={(() => handleExcluir(iteme.id))}>Excluir</button>
                              </table>
                           
                            </div>
                          </tr>
                      ) }
                        </div>
                           
                          </div>
                        )
                      })
                    }
                </div>
            }
          </div>

      <div className="BalcaoCozinha">
       <h1>Pedidos aceites e ecaminhado para cozinha</h1>
          {
            pedido.map((iteme)=>{
              return(
                <div>
                   <div>
                    { iteme.aceito===false && iteme.draft===false &&(
                   <tr className="pedir" key={iteme.id}>
                   
                  <div className="centro">
                    <table border="1" text-align='center'>
                      <td className="info">N:{iteme.numero_do_pedido}</td>
                      {iteme.clientes && <td className="info">Nome do Cliente: {iteme.clientes.nome}</td>}
                      {iteme.clientes && <td className="info">celular: {iteme.clientes.celular}</td>}
                      <td className="info">Data:{iteme.update_at}</td>
                      <td className="info">status:{iteme.status}</td>
                      
                    </table>
                  </div>
                </tr>
            ) }
              </div>
                 
                </div>
              )
            })
          }
      </div>
    </div>
  )}


