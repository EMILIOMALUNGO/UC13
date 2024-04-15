import { Request, Response } from "express";
import { AlterarUsuariosServices } from "../../Services/Usuarios/AlterarUsuariosServices";




class AlterarUsuariosController{
  async handle( req:Request, res:Response ){
    
    const{id,nome,email,categoriaId}= req.body

    const alterarUsuariosController = new AlterarUsuariosServices()
    const AlterarUsuario = await alterarUsuariosController.execute({
        id,nome,email,categoriaId
    })
       return res.json(AlterarUsuario)
  }

}
export {AlterarUsuariosController}