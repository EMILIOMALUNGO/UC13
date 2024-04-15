import { Request, Response } from "express"
import { ApagarUsuariosServices } from "../../Services/Usuarios/ApagarUsuariosServices"





class ApagarUsuariosController{
 async handle(req:Request, res:Response){
 
           const {id} =req.params
         //  console.log('c', id)

    const apagarUsuariosController = new ApagarUsuariosServices()
    const ApagarUsuarios = await apagarUsuariosController.execute({id})
     
   // console.log(ApagarUsuarios)
     return res.json(ApagarUsuarios)

}
}
export {ApagarUsuariosController}