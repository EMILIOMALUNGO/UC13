import { Request,Response } from "express";
import { ApagarUsuarioServices } from "../../Services/Usuario/ApagarUsuarioServices";


class ApagarUsuarioController{
 async handle(req:Request, res:Response){
       
    const {apagar}= req.body
    const apagarUsuarioController = new ApagarUsuarioServices()
    const apagarUsuario = await apagarUsuarioController.execute({
        apagar
    })
       return res.json(apagarUsuario) 
 }

}
export {ApagarUsuarioController}