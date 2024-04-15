import { Request, Response } from "express";
import { ApagarProdutoServices } from "../../Services/Produto/ApagarProdutoServices";



class ApagarProdutoController{
  async handle(req:Request, res:Response){

    const {apagar}= req.body
    
     const apagarProdutoController = new ApagarProdutoServices()
     const agarProduto = await apagarProdutoController.execute({
        apagar
     })
     return res.json(agarProduto)
  }

}
export {ApagarProdutoController}