import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'


import { LoginController } from './Controller/Login/LoginController'

import { CriarusuariosController } from './Controller/Usuarios/CriarUsuariosController'
import { ListarUsuarioTokenController } from './Controller/Usuarios/ListarUsuarioTokenController'

import { EditarUsuariosController } from './Controller/Usuarios/EditarUsuariosController'
import { ListarUsuarioController } from './Controller/Usuarios/ListarUsuarioController'
import { AlterarUsuariosController } from './Controller/Usuarios/AlterarUsuariosController'
import { ApagarUsuariosController } from './Controller/Usuarios/ApagarUsuariosController'

import { CriarGradedauscController } from './Controller/Gradedausc/CriarGradedauscController'
import { ListartGradedauscControler } from './Controller/Gradedausc/ListartGradedauscControler'
import { EditarGradedauscController } from './Controller/Gradedausc/EditarGradedauscController'
import { AlterarGradedauscController } from './Controller/Gradedausc/AlterarGradedauscController'
import { ApagarGradedauscController } from './Controller/Gradedausc/ApagarGradedauscController'
import { ListartGradedauscControllerID } from './Controller/Gradedausc/ListartGradedauscControllerID'



import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'
import { EditarCategoriaController } from './Controller/Categorias/EditarUsuarioController'
import { AlterarCategoriaController } from './Controller/Categorias/AlterarCategoriaController'
import { ApagarCategoriaController } from './Controller/Categorias/ApagarCategoriaController'
import { ListarCategoriaControllerID } from './Controller/Categorias/ListarCategoriaControllerID'

import { CriarAtividadeController } from './Controller/AtividadeVaga/CriarAtividadeController'
import { ListarAtividadeVagaControler } from './Controller/AtividadeVaga/ListarAtividadeVagaControler'
import { EditarAtividadeVagaController } from './Controller/AtividadeVaga/EditarAtividadeVagaController'
import { AlterarAtividadeVagaController } from './Controller/AtividadeVaga/AlterarAtividadeVagaController'
import { ApagarAtividadeVagaController } from './Controller/AtividadeVaga/ApagarAtividadeVagaController'
import { ListartAtividadeVagaControllerID } from './Controller/AtividadeVaga/ListartAtividadeVagaControllerID'

import { CriarAnuncioFaltaController } from './Controller/Anunciofalta/CriarAnuncioFaltaController'
import { ListarAnuncioFaltaController } from './Controller/Anunciofalta/ListarAnuncioFaltaController'
import { EditarAnuncioFaltaController } from './Controller/Anunciofalta/EditarAnuncioFaltaController'
import { AlterarAnuncioFaltaController } from './Controller/Anunciofalta/AlterarAnuncioFaltaController'
import { ApagarAnuncioFaltaController } from './Controller/Anunciofalta/ApagarAnuncioFaltaController'
import { ListarAnuncioFaltaControllerID } from './Controller/Anunciofalta/ListarAnuncioFaltaControllerID'


import { CriarReuniaoController } from './Controller/Reuniao/CriarReuniaoController'
import { ListarReuniaoController } from './Controller/Reuniao/ListarReuniaoController'
import { EditarReuniaoController } from './Controller/Reuniao/EditarReuniaoController'
import { AlterarReuniaoController } from './Controller/Reuniao/AlterarReuniaoController'
import { ApagarReuniaoController } from './Controller/Reuniao/ApagarReuniaoController'
import { ListarReuniaoControllerID } from './Controller/Reuniao/ListarReuniaoControllerID'


import { CriarNotasalunoControllr } from './Controller/Notasaluno/CriarNotasalunoControllr'
import { ListarNotasalunoController } from './Controller/Notasaluno/ListarNotasalunoController'
import { EditarNotasalunoController } from './Controller/Notasaluno/EditarNotasalunoController'
import { AlterarNotasalunoController } from './Controller/Notasaluno/AlterarNotasalunoController'



import { isAutenticado } from './middleware/isAutenticado'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


//Rotas de Logins
router.post('/LoginUsuarios', new LoginController().handle)


//Rotas de Motoqueiros


//Rotas de Clientes



//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)
router.get('/ListarUsuarioToken/:id', new ListarUsuarioTokenController().handle)
router.put('/EditarUsuario', new EditarUsuariosController().handle)
router.get('/ListarUsuario', new ListarUsuarioController().handle )
router.put('/AlterarUsuarios', isAutenticado,new AlterarUsuariosController().handle)
router.delete('/ApagarUsuarios/:id',isAutenticado, new  ApagarUsuariosController().handle)

//Estrutura de Produtos
router.post('/CriarGradedaus', upload.single('file'), new CriarGradedauscController().handle)
router.get('/ListartGradeda',isAutenticado, new ListartGradedauscControler().handle)
router.delete('/ApagarGrade/:id',isAutenticado, new ApagarGradedauscController().handle)
router.get('/EditarGrade/:id',isAutenticado,new EditarGradedauscController().handle)
router.put('/AlterarGrade/:id',isAutenticado,new  AlterarGradedauscController().handle)
router.get('/ListartGradedaID/:id',isAutenticado,new ListartGradedauscControllerID().handle)


//Estrutura de Categorias
router.post('/CriarCategorias', new  CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)
router.get('/EditarCategoria/:id',  isAutenticado, new  EditarCategoriaController().handle)
router.put('/AlterarCategoria/:id', isAutenticado, new AlterarCategoriaController().handle)
router.delete('/ApagarCategoria/:id',isAutenticado, new ApagarCategoriaController().handle)
router.get('/ListarCategoriaID/:id', new ListarCategoriaControllerID().handle)

//Estrutura de Atividadevaga  
router.post('/CriarAtividade', upload.single('file'), new CriarAtividadeController().handle)
router.get('/ListarAtividade', new ListarAtividadeVagaControler().handle)
router.get('/EditarAtividade/:id', new EditarAtividadeVagaController().handle)
router.put('/AlterarAtividade/:id', isAutenticado, new AlterarAtividadeVagaController().handle)
router.delete('/ApagarAtividade/:id',isAutenticado, new ApagarAtividadeVagaController().handle)
router.get('/ListarAtividade/:id', isAutenticado, new ListartAtividadeVagaControllerID().handle)

//Estrutura de CriarAnuncio 
router.post('/CriarAnuncio', upload.single('file'), new CriarAnuncioFaltaController().handle)
router.get('/ListarAnuncio', new ListarAnuncioFaltaController().handle)
router.get('/EditarAnuncio/:id',  new  EditarAnuncioFaltaController().handle)
router.put('/AlterarAnuncio/:id', isAutenticado, new AlterarAnuncioFaltaController().handle)
router.delete('/ApagarAnuncio/:id',isAutenticado, new ApagarAnuncioFaltaController().handle)
router.get('/ListarAnuncio/:id', isAutenticado, new  ListarAnuncioFaltaControllerID().handle)

//Estrutura de Reuniao  CriarNotasalunoControllr
router.post('/CriarReuniao', upload.single('file'), new CriarReuniaoController().handle)
router.get('/ListarReuniao' , new ListarReuniaoController().handle)
router.get('/EditarReuniao/:id', new   EditarReuniaoController().handle)
router.put('/AlterarReuniao/:id', isAutenticado, new AlterarReuniaoController().handle)
router.delete('/ApagarReuniao/:id',isAutenticado, new ApagarReuniaoController().handle)
router.get('/ListarReuniao/:id', isAutenticado, new  ListarReuniaoControllerID().handle)


//Estrutura de CriarNotasalunoControllr
router.post('/CriarNota', new CriarNotasalunoControllr().handle)
router.get('/ListarNotas', isAutenticado, new ListarNotasalunoController ().handle)
router.get('/EditarNota/:id',  isAutenticado, new   EditarNotasalunoController().handle)
router.put('/AlterarNotas/:id', isAutenticado, new AlterarNotasalunoController().handle)
router.delete('/ApagarReuniao/:id',isAutenticado, new ApagarReuniaoController().handle)
router.get('/ListarReuniao/:id', isAutenticado, new  ListarReuniaoControllerID().handle)


export { router }