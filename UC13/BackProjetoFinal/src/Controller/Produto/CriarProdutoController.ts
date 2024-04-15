import { Request, Response } from "express";
import { CriarProdutoServices } from "../../Services/Produto/CriarProdutoServices";





class  CriarProdutoController {
    async handle(req:Request, res:Response){

        const {nome, fabricante, quantidade,banner,preco,tamanho,categoriaId} = req.body
        // console.log("cont:",nome, fabricante, quantidade,preco,tamanho,cor,categoriaId)
        
        if (!req.file) {
           throw new Error("imagem com problema")
            
        }
        else{
            const {originalname, filename:banner} = req.file
            const CriarProdutoController = new  CriarProdutoServices ()
            const Produto = await CriarProdutoController.execute({
                nome,fabricante,quantidade,banner,preco,tamanho,categoriaId
            })
              return res.json(Produto)
        }
   
    }
}


export {CriarProdutoController}