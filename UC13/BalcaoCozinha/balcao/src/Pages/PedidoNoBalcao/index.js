import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import './PedidoNoBalcao.css'
import apiFront from "../../API/apiFront";


// sanbeno que o = false  e 1 é verdadeiro
export default function PedidoNoBalcao() {
    const navigation = useNavigate()

    const [cliente, setClientes] = useState([''])
    const [idcliente, setIdcliente] = useState('')
    const [criarPedido, setCriarPedido] = useState([''])
    const [categoria, setCategoria] = useState([''])
    const [produtoCategoria, setProdutoCategoria] = useState([''])
    const [modalAberto, setModalAberto] = useState(false)

    const [categoriaId, setCategoriaId] = useState('')
    const [idItemProduto, setIdItemProduto] = useState('')
    const [itensPedido, setItensPedido] = useState([''])
    const [quantidadeF, setQuantidadeF] = useState('')
    const [valorTotal, setValorTotal] = useState('')
    const [listarItenPedido, setListarItenPedido] = useState([''])
    const [produto, setProduto] = useState([''])
    const [fechar, setFechar] = useState([''])
   // const [valor, setValor] = useState(1)
   // const [mult, setMut] = useState()
    //const [itens, setItens] = useState([1]);
    const [apagaritem, setApagaritem] = useState([''])


    useEffect(() => {
        async function listarCliente() {
            const response = await apiFront.get('/listarCliente')
            setClientes(response.data)
            //console.log(response.data)
        }
        listarCliente()
    }, [])

    // console.log(criarPedido)

    
    async function abrirModal() {
      
        try {
           
            const ClienteId = idcliente
            const response = await apiFront.post('/CriarPedidos', {
                ClienteId
            })
            setCriarPedido(response.data)
            //console.log(response.data.Pedido.id)
            if (response.data.Pedido.id) {
                //  console.log(response.data.Pedido.id)
                setModalAberto(true)
            }
            
            async function lerProdutosCategoria() {
                const response = await apiFront.get('/listarCategoria')
                setCategoria(response.data)
                // console.log(response.data.nome)
            }
            lerProdutosCategoria()

        } catch (Error) {
            console.log(Error)
        }

    }



    useEffect(() => {
        async function lerProdutosCategoria() {
            //setListarItenPedido([''])
            try {
                if (!categoriaId) {
                    return
                }

                const response = await apiFront.get(`/listarProduto/${categoriaId}`)
                // console.log(response.data)
                setProdutoCategoria(response.data)

            } catch (error) {
                console.log(error.response)
            }
        }
        lerProdutosCategoria()
    }, [categoriaId])
    //console.log(produtoCategoria)
    // console.log(idItemProduto)

     //console.log(itensPedido)
    async function handleItemPedido(e) {
        try {
            e.preventDefault()
            const prodExt = produtoCategoria.filter((item) => item.id === idItemProduto)
            const valor = Number(prodExt.map((item) => item.preco) * quantidadeF)
            const PedidoId = criarPedido.Pedido.id
            const ProdutoId = idItemProduto
            const quantidade = Number(quantidadeF)
            //console.log(prodExt)
            
            const response = await apiFront.post('/criarItem', {
                PedidoId,
                ProdutoId,
                quantidade,
                valor
            },)
            let dados = {
                id:response.data.CriarItem.id,
                produto: response.data.CriarItem.produtos.nome,
                quantidade: response.data.CriarItem.quantidade,
                preco: response.data.CriarItem.produtos.preco,
                valor: Number(response.data.CriarItem.valor)
            }
            setItensPedido(oldArray => [...oldArray, dados])
          
            //console.log(dados)
           // setItensPedido(response.data.CriarItem.produtos.nome)
           //console.log(response.data.CriarItem.produtos.nome)
        }catch(Error) {
            console.log(Error.response)
        }
        //setItensPedido([''])
    }
    useEffect(()=>{ 
    handleItemPedido()

},[])
  
  

    
    async function handleApagarItem(id){
        try {
        
            const response = await apiFront.delete(`/apagarItem/${id}`)
            setApagaritem(response.data)
            // console.log(response.data)
        } catch (Error) {
            ////console.log(Error)
        }   
        setApagaritem('')   
        
    }
    useEffect(()=>{
        handleApagarItem()
    },[ ])
 


    

   
        async function somarItensPedido() {
            try {
                const id = criarPedido.Pedido.id
                // console.log(id)
                const response = await apiFront.get(`/SomarItem/${id}`)
                setValorTotal(response.data)
                //console.log(response.data)
            } catch (Error) {
               // console.log(Error)
            }
        }
        somarItensPedido()
   
    //console.log (valorTotal)

  // console.log(fechar)
  async function fecharModal(){
      const id = criarPedido.Pedido.id
      
      try{
          const status ='confirmado'
          const aceito = true
          let draft=false
          let data = {
              id,status,aceito,draft
            }
            const response = await apiFront.put('/alterarPedido',data)
            setFechar(response)
            //console.log(response)
            navigation('/Balcao')
            
        }catch(Error){
            // console.log(Error.response)
            return
        }
        fecharModal()
    }
  //  useEffect(()=>{
//},[apagaritem])

    function VoltarOutraTela() {
        navigation('/Balcao')
    }


    return (
        <div>
            <Header />
            <div className="seleciona">
                <h1 > Selecione o clientes</h1>

                <select  className="containe11" value={idcliente} onChange={(e) => setIdcliente(e.target.value)}>
                    <option >coloca o Nome do cliente ....</option>
                    {cliente.map((items) => {
                        return (
                            <option value={items.id}>{items.nome}</option>
                        )
                    })}
                </select>
                <button className="containe12" onClick={abrirModal}>Criar Pedido</button>
               
                {criarPedido.length !== 1 && (
                    <Modal  isOpen={modalAberto}>
                        <h1 className="containe13">Ralizar Pedidos</h1>
                        <>
                        <div className="containe14">
                            {criarPedido.Pedido.clientes && <h1 className="info2">Nome do Cliente: {criarPedido.Pedido.clientes.nome}</h1>}
                            <h2>numero do pedido:{criarPedido.Pedido.numero_do_pedido}</h2>

                            <h1>Itens do Pedido</h1>

                            <form onSubmit={handleItemPedido} >
                                <select value={categoriaId}
                                    onChange={(e) => setCategoriaId(e.target.value)}>
                                    <option>Seleciona a categoria...</option>


                                    {
                                        categoria.map((item) => {
                                            return (
                                                <option value={item.id}>{item.nomes}</option>

                                            )
                                        })
                                    }
                                </select>
                                <select value={idItemProduto} onChange={(e) => setIdItemProduto(e.target.value)}>
                                    <option>coloca o produto...</option>
                                    {produtoCategoria.map((items) => {
                                        return (
                                            <option value={items.id}>{items.nome}</option>
                                        )
                                    })

                                    }
                                </select>

                                <input type="text" placeholder='quantidade' value={quantidadeF}
                                    onChange={(e) => setQuantidadeF(e.target.value)} />

                                <button type='submit'>Adicionar produto</button>
                            </form>
                          <div>
                               {itensPedido.map((item)=>{
                                   return(
                                    <>
                                    {item.length !== 0 && (
                                    
                                        <article className="containe15">
                                            <div>
                                           <h2>Nome:{item.produto} - Quantidade:{item.quantidade}- Preço:{item.preco}- valor:{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(`${item.valor}`)}</h2>
                                           </div>
                                           <div>
                                           <button className="containe16" onClick={(() => handleApagarItem(item.id))}>Excluir</button>           
                                           </div>
                                        </article>
                                   
                                   ) }
                                   </>

                                    
                                   )
                               })

                               }
                          </div>
                            <h1>Valor Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(`${valorTotal}`)} </h1>
                            <button className="containe17" onClick={(() => fecharModal('/Pedido/{id}'))}>Finalizar Pedido</button>

                            <button className="containe18" onClick={VoltarOutraTela}>Voltar para Balcão</button>
                            </div>
                        </>
                                           
                    </Modal>
                    
                )}


            </div>
        </div>
    )
}