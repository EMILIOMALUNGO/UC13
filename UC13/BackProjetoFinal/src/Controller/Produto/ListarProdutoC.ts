import { Request, Response } from "express";
import { ListarProdutoS } from "../../Services/Produto/ListarProdutoS";


class ListarProdutoC{
async handle(req:Request, res:Response){

    const listarProdutoC =new ListarProdutoS()
    const  ListarProdu  = await listarProdutoC.execute()
    return res.json(ListarProdu)
}
}
export{ListarProdutoC}