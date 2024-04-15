import { Request, Response } from "express";
import { ListarUsuarioServices } from "../../Services/Usuarios/ListarUsuarioServices";



class ListarUsuarioController{
    async handle(req:Request, res:Response){
     const listarUsuarioController =new ListarUsuarioServices()
     const ListarUsuario = await listarUsuarioController.execute()
     return res.json(ListarUsuario)
    }
}
export {ListarUsuarioController}