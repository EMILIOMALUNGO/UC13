import { Request,Response } from "express";
import { EditarUsuarioServices } from "../../Services/Usuario/EditarUsuarioServices";


class EditarUsuarioController{
   async handle (req:Request, res:Response){

    const {id} = req.params
    const editarUsuarioController = new  EditarUsuarioServices()
     const EditarUsuario = await editarUsuarioController.execute({
        id
     })
     return res.json(EditarUsuario)
  
    
   }

}
export {EditarUsuarioController}