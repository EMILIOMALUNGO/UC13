import { Request,Response, response } from "express";
import { ListarPagamentosServices } from "../../Services/Pagamento/ListarPagamentosServices";



class ListarPagamentosController{
     async handle(req:Request, res:Response){
         
         const ListarPagamentosController = new ListarPagamentosServices()
         const listarPagamentos = await ListarPagamentosController.execute() 
         return res.json(listarPagamentos)
     }

}
export {ListarPagamentosController}