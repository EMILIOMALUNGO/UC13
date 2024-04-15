import { Request,Response } from "express";
import { AlterarProdutoServices } from "../../Services/Produto/AlterarProdutoServices";



class AlterarProdutoController{
   async handle(req:Request, res:Response){

    const {id,nome, fabricante, quantidade,banner,preco,tamanho,categoriaId} =req.body

    const alterarProdutoController = new AlterarProdutoServices()
     const alterarProduto = await alterarProdutoController.execute({
        id,nome, fabricante, quantidade,banner,preco,tamanho,categoriaId
     })
        return res.json(alterarProduto)
   }

}
export {AlterarProdutoController}