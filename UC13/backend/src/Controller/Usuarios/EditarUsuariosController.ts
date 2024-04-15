import { Request, Response } from "express";
import { EditarUsuariosServices } from "../../Services/Usuarios/EditarUsuariosServices";



class EditarUsuariosController{
  async handle(req:Request, res:Response){

    const{id}= req.params
  
    const editarUsuariosController = new EditarUsuariosServices()
    const editarUsuarios = await editarUsuariosController.execute({id})
     
     return res.json(editarUsuarios)
}

}
export {EditarUsuariosController}