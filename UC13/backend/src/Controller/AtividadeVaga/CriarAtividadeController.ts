import { Request, Response } from "express";
import { CriarAtividadeServer } from "../../Services/AtividadeVaga/CriarAtividadeServer";



class CriarAtividadeController {
    async handle(req:Request, res:Response){

            const {nome,banner,categoriaId} = req.body
            // console.log("cont:",nome,categoriaId)
            
            if (!req.file) {
               throw new Error("imagem com problema")
                
            }
            else{
                const {originalname, filename:banner} = req.file
                const CriarProdutoController = new CriarAtividadeServer()
                const Produto = await CriarProdutoController.execute({
                    nome,banner,categoriaId,
                })
               // console.log(Produto)
                  return res.json(Produto)
            }
       
        }
    }

export{CriarAtividadeController }