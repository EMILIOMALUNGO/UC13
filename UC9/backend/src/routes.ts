import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { LoginController } from './Controller/LoginUsuario/LoginController'
import { CriarusuariosController } from './Controller/Usuarios/CriarUsuariosController'
import { ListarUsuarioTokenController } from './Controller/Usuarios/listarUsuarioTokenController'
import { EditarClienteControler } from './Controller/Cliente/EditarClienteControler'

import { LoginClienteController } from './Controller/LoginCliente/LoginClienteController'
import { CriarClienteControler } from './Controller/Cliente/CriarClienteControler'
import { ListarClienteController } from './Controller/Cliente/ListarClienteController'
import { ListarClienteControllerID } from './Controller/Cliente/ListarClienteControllerID'
import { AlterarClienteController } from './Controller/Cliente/AlterarClienteController'
import { AlterarSenhaController } from './Controller/Cliente/AlterarSenhaController'

import { CriarMotoqueiroController } from './Controller/Motoqueiro/CriarMotoqueiroController'
import { LoginMotoqueirocontroller } from './Controller/LoginMotoqueiro/LoginMotoqueirocontroller'

import { CriarProdutosController } from './Controller/Produtos/CriarProdutosController'

import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'

import { isAutenticado } from './middleware/isAutenticado'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


//Rotas de Logins
router.post('/LoginUsuarios', new LoginController().handle)


//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)
router.get('/ListarUsuarioToken', isAutenticado, new ListarUsuarioTokenController().handle)

//Estrutura de Motoqueiro
router.post('/CriarMotoqueiro', new CriarMotoqueiroController().handle)
router.post('/LoginMotoqueiro',new LoginMotoqueirocontroller().handle)

router.post('/criarCliente',new CriarClienteControler().handle)
router.post('/LoginCliente', new LoginClienteController().handle)
router.get('/ListarClienteC',new ListarClienteController().handle)
router.get ('/ListarClient/:id', new ListarClienteControllerID().handle)
router.get('/editarCliente/:id', new EditarClienteControler().handle)
router.put('/AlterarCliente', new AlterarClienteController().handle)
router.put('/AlterarSenha', new AlterarSenhaController().handle)

//Estrutura de Produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)



//Estrutura de Categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)


export { router }