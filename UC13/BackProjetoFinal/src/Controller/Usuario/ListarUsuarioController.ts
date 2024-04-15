import { Request,Response } from "express";
import { ListarUsuarioServices } from "../../Services/Usuario/ListarUsuarioServices";



class ListarUsuarioController{
   async handle (req:Request, res:Response){
       const{id}= req.params
    const listarUsuarioServices = new ListarUsuarioServices()
    const listarUsuario = await listarUsuarioServices.execute({id}) 
    
    //console.log(listarUsuario)
   
    return res.json (listarUsuario)  
   }

}
export {ListarUsuarioController}