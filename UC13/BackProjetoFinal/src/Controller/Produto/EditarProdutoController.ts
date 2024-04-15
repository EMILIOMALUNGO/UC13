import { Request,Response } from "express";
import { EditarProdutoServices } from "../../Services/Produto/EditarProdutoServices";


class EditarProdutoController{
    async handle(req:Request, res:Response){
        const {id}=req.params
         
        const editarProdutoController = new EditarProdutoServices()
        const editarProduto = await editarProdutoController.execute({id})
        return res.json(editarProduto)
    }
}
export {EditarProdutoController}