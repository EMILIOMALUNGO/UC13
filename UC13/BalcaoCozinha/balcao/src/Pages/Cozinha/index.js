import React from "react";

import { useEffect, useState } from "react";
import Header from "../../Components/Header";

import { Link, useNavigate, useParams } from "react-router-dom";

import apiFront from "../../API/apiFront";

import './Cozinha.css'


export default function Cozinha() {
  const navigation = useNavigate()
  const { id } = useParams()

  //console.log(id)
  const [todosPedidos, setTodosPedidos] = useState([''])
  const [modalAbertos, setModalAbertos] = useState(false)
  const [cadaitem, setCadaitem] = useState({})


  //console.log(todosPedidos)
  async function handleCozinha() {
    const response = await apiFront.get('/listarPedido')
    setTodosPedidos(response.data)
    //console.log(response.data)
  }
  handleCozinha()

  //console.log(cadaitem)
  async function abrirModalProduto(id) {

    try {
      //const id = dados
      const response = await apiFront.get(`/listarItem/${id}`)
      setCadaitem(response.data)
      // console.log(response.data)
      // navigation('/PegarItens')


      ////if (response.data.produto.id) {
      //console.log(response.data.produtos.id)
      //setModalAbertos(true)
      //const pegar = await localStorage.setItem("@dadoscarrrinho", JSON.stringify(response.data.produtos.id))
      // console.log(pegar)
    }
    catch (error) {
      console.log(error.response)
    }
  }



  return (
    <div>
      <Header />
      <div className="numero">
        <h1>Numeros dos pedidos</h1>
        <div className="containermap">

          <div className="containermap2">
            {
              todosPedidos.map((tame) => {
                return (
                  <article className="todosnumeros" key={tame.id}>
                    <div>
                    <button onClick={(() => abrirModalProduto(tame.id))}>Veros item </button>
                    </div>
                     <div>
                    <h2>{tame.numero_do_pedido}</h2>
                     </div>
                  </article>
                )

              })
            }
          </div>
          <div className="containermap3">
            {cadaitem !== null ? (
              cadaitem.length > 0 ? (
                cadaitem.map((item, index) => (
                  <tr className=".todositem" key={item.id}>
                    <div>
                    <p>{item.produtos.nome}</p>
                    <p>{item.quantidade}</p>
                    <p>{item.valor}</p>
                    </div>


                  </tr>
                ))
              ) : (
                <p>Nenhum agendamento encontrado.</p>
              )
            ) : (
              <p>Carregando...</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}