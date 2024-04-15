import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'


import { LoginController } from './Controller/Login/LoginController'
import { LoginMotoqueirosController } from './Controller/Motoqueiros/LoginMotoqueirosController'
import { CriarusuariosController } from './Controller/Usuarios/CriarUsuariosController'
import { ListarUsuarioTokenController } from './Controller/Usuarios/listarUsuarioTokenController'

import { CriarMotoqueirosController } from './Controller/Motoqueiros/CriarMotoqueirosController'
import { ListarMotoqueirosTokenController } from './Controller/Motoqueiros/ListarMotoqueiroTokenController'

import { CriarClientesController } from './Controller/Clientes/CriarClientesController'
import { LoginClientesController } from './Controller/Clientes/LoginClientesController'

import { CriarProdutosController } from './Controller/Produtos/CriarProdutosController'

import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'

import { PedidosController } from './Controller/Pedidos/PedidosController'

import { isAutenticado } from './middleware/isAutenticado'
import { PedidosServices } from './Services/Pedidos/PedidosServices'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


//Rotas de Logins
router.post('/LoginUsuarios', new LoginController().handle)
router.post('/LoginMotoqueiros', new LoginMotoqueirosController().handle)
router.get('/ListarMotoqueirosToken', isAutenticado, new ListarMotoqueirosTokenController().handle)

//Rotas de Motoqueiros
router.post('/CriarMotoqueiros', isAutenticado, new CriarMotoqueirosController().handle)

//Rotas de Clientes
router.post('/CriarClientes', isAutenticado, new CriarClientesController().handle)
router.post('/LoginClientes', new LoginClientesController(). handle)
router.get('/ListarClientes', isAutenticado, new CriarClientesController().listarClientes)


//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)
router.get('/ListarUsuarioToken', isAutenticado, new ListarUsuarioTokenController().handle)

//Estrutura de Produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)


//Estrutura de Categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)

//Estrutura de Pedidos
router.post('/CriarPedidos', isAutenticado, new PedidosController().criarPedidos)
router.get('/ListarProdutosCategoria/:id', isAutenticado, new PedidosController().listarProdutosCategoria)
router.post('/CriarItensPedido', isAutenticado, new PedidosController().criarItensPedido)
router.delete('/ApagarItemPedido/:id', isAutenticado, new PedidosController().apagarItemPedido)
router.get('/SomarItensPedido/:id', isAutenticado, new PedidosController().somarItensPedido)

export { router }