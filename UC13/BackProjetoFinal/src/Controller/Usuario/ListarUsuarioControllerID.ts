import { Request,Response } from "express";

import { ListarUsuarioServicesID } from "../../Services/Usuario/ListarUsuarioServicesID";



class ListarUsuarioControllerID{
    async handle(req:Request, res:Response){

        const {id}=req.params
        console.log(id)

        const  listarUsuarioControllerID = new ListarUsuarioServicesID()
        const listarId = await listarUsuarioControllerID.execute({id})
        return res.json(listarId)
      
    }
}
export {ListarUsuarioControllerID}

