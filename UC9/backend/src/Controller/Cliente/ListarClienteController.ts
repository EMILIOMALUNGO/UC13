import { Request,Response } from "express";
import { ListarClienteServer } from "../../Services/Cliente/ListarClienteServer";


class ListarClienteController{
   async handle(req:Request, res:Response){
     const listarClienteController = new ListarClienteServer()
       const listarClientec = await listarClienteController.execute()
      return res.json(listarClientec)
       }
}
export {ListarClienteController}