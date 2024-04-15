import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'

import { isAutenticado } from "./middleware/isAutenticado";

import { LoginUsuarioControlles } from "./Controller/Loguin/LoginUsuarioControlles";

import { CriarUsuarioController } from "./Controller/Usuario/CriarUsuarioController";
import { ListarUsuarioController } from "./Controller/Usuario/ListarUsuarioController";
import { ListarUsuarioControllerID } from "./Controller/Usuario/ListarUsuarioControllerID";

import { EditarUsuarioController } from "./Controller/Usuario/EditarUsuarioController";
import { AlterarUsuarioController } from "./Controller/Usuario/AlterarUsuarioController";
import { ApagarUsuarioController } from "./Controller/Usuario/ApagarUsuarioController";

import { CriarProdutoController } from "./Controller/Produto/CriarProdutoController";
import { ListarProdutoController } from "./Controller/Produto/ListarProdutoController";
import { ListarProdutoC } from "./Controller/Produto/ListarProdutoC";
import { EditarProdutoController } from "./Controller/Produto/EditarProdutoController";
import { AlterarProdutoController } from "./Controller/Produto/AlterarProdutoController";
import { ApagarProdutoController } from "./Controller/Produto/ApagarProdutoController";

import { CriarItemController } from "./Controller/Item/CriarItemController";
import { ListarItemControler } from "./Controller/Item/ListarItemControler";
import { EditarItemController } from "./Controller/Item/EditarItemController";
import { AlterarItemController } from "./Controller/Item/AlterarItemController";
import { ApagarItemController } from "./Controller/Item/ApagarItemController";
import { ListarItemControllerID } from "./Controller/Item/ListarItemControllerID";
import { SomarItemController } from "./Controller/Item/SomarItemController";

import { LoginMotoqueirocontroller } from "./Controller/LoginMotoqueiro/LoginMotoqueirocontroller";
import { CriarMotoqueiroController } from "./Controller/Motoqueiro/CriarMotoqueiroController";

import { LoginClienteController } from "./Controller/LoginCliente/LoginClienteController";
import { CriarClienteCotroller } from "./Controller/Cliente/CriarClienteCotroller";
import { ListarClienteContreller } from "./Controller/Cliente/ListarClienteContreller";
import { EditarClienteController } from "./Controller/Cliente/EditarClienteController";
import { AlterarClienteController } from "./Controller/Cliente/AlterarClienteController";
import { ApagarClienteController } from "./Controller/Cliente/ApagarClienteController";

import { CriarPedidosController } from "./Controller/Pedidos/CriarPedidosController";
import { ListarPedidoController } from "./Controller/Pedidos/ListarPedidoController";
import { EditarPedidoController } from "./Controller/Pedidos/EditarPedidoController";
import { AlterarPedidoController } from "./Controller/Pedidos/AlterarPedidoController";
import { ApagarPedidosController } from "./Controller/Pedidos/ApagarPedidosController";
import { ListarPedidoControllerID } from "./Controller/Pedidos/ListarPedidoControllerID";



import { CriarPagamentocontroller } from "./Controller/Pagamento/CriarPagamentocontroller";
import { ListarPagamentosController } from "./Controller/Pagamento/ListarPagamentosController";
import { EditarPagamentoController } from "./Controller/Pagamento/EditarPagamentoController";
import { AlterarPagamentoController } from "./Controller/Pagamento/AlterarPagamentoController";
import { ApagarPagamentoController } from "./Controller/Pagamento/ApagarPagamentoController";


import { CriarCategoriaController } from "./Controller/Categoria/CriarCategoriaController";
import { ListarCategoriasController } from "./Controller/Categoria/ListarCategoriaController";
import { EditarCategoriaController } from "./Controller/Categoria/EditarCategoriaController";
import { AlterarCategoriaController } from "./Controller/Categoria/AlterarCategoriaController";
import { ApagarCategoriaController } from "./Controller/Categoria/ApagarCategoriaController";
import { ListarCategoriaControllerID } from "./Controller/Categoria/ListarCategoriaControllerID";




const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

// criar os EndPoint das minhas Login
router.post("/loginUsuario",new LoginUsuarioControlles().handle)

// criar os EndPoint das minhas usuario
 router.post("/criarUsuario", new  CriarUsuarioController().handle )
 router.get("/ListarUsuario", new  ListarUsuarioController().handle )
router.get('/listarUsuario1/:id',new ListarUsuarioControllerID().handle)
 
 router.get ("/editarUsuaidrio/:id",isAutenticado,  new EditarUsuarioController().handle )
 router.put('/alterarUsuario',isAutenticado,  new AlterarUsuarioController().handle)
 router.delete('/apagarUsuario',isAutenticado,  new  ApagarUsuarioController().handle)
 
 // // criar os EndPoint dos Produto
 router.post("/criarProduto" , upload.single('file'),new   CriarProdutoController().handle) 
 router.get("/ListarProduto", new ListarProdutoC().handle)

 router.get("/editarProduto/:id",isAutenticado, new EditarProdutoController().handle)
 router.get("/listarProduto/:id",  new ListarProdutoController().handle)
 router.put("/alterarProduto1",isAutenticado,  new AlterarProdutoController().handle)
 router.delete("/apagarProduto", new ApagarProdutoController().handle)

 // // criar os EndPoint dos Item
 
  router.post("/criarItem", new CriarItemController().handle)
  router.get("/listarItem", new ListarItemControler().handle)
  router.get("/EditarItem/:id",isAutenticado,new EditarItemController().handle)
  router.get("/listarItem/:id",new  ListarItemControllerID ().handle)
  router.put("/alterarItem",isAutenticado,new AlterarItemController().handle)
  router.delete("/apagarItem/:id", new  ApagarItemController().handle)
  router.get('/SomarItem/:id', new SomarItemController().handle)


// criar os EndPoint dos Motoqueiro

router.post("/CriarMotoqueiro", new CriarMotoqueiroController().handle)
router.post("/LoginMotoqueiro", new  LoginMotoqueirocontroller().handle)

 // criar os EndPoint dos Cliente 
 router.post("/LoginCliente", new  LoginClienteController().handle)
 router.post("/criarCliente", new CriarClienteCotroller().handle)
router.get ("/listarCliente", new  ListarClienteContreller().handle)
router.get ("/editarCliente/:id", new EditarClienteController().handle)
router.put ('/alterarCliente', new AlterarClienteController().handle)
router.delete('/apagarCliente', new ApagarClienteController().handle)



// // criar os EndPoint dos Pedido
router.post("/CriarPedidos",  new CriarPedidosController().handle)
router.get("/listarPedido", new  ListarPedidoController().handle)
router.get("/listarPedido/:id", new ListarPedidoControllerID().handle)
router.get('/editarPedido/:id',  new EditarPedidoController().handle)
router.put("/alterarPedido",  new AlterarPedidoController().handle)
router.delete("/apagarPedido/:id", new ApagarPedidosController().handle)




// // criar os EndPoint dos Pagamento
router.post("/criarPagamento",isAutenticado,  new CriarPagamentocontroller().handle)
router.get('/listarPagamento',isAutenticado,  new ListarPagamentosController().handle)
router.get('/editarPagamento/:id',isAutenticado, new EditarPagamentoController().handle)
router.put("/alterarPagamento",isAutenticado,  new AlterarPagamentoController().handle)
router.delete("/ApagarPagamento",isAutenticado, new  ApagarPagamentoController().handle)


// // criar os EndPoint dos Categoria 
router.post("/CriarCategoria", new CriarCategoriaController().handle)
router.get('/listarCategoria', new ListarCategoriasController().handle)
router.get('/ListarCategoria/:id',new ListarCategoriaControllerID().handle)
router.get('/editarCategoria/:id',isAutenticado, new EditarCategoriaController().handle)
router.put("/alterarCategoria",isAutenticado, new AlterarCategoriaController().handle)
router.delete("/apagarCategoria",isAutenticado, new  ApagarCategoriaController().handle)



export {router}