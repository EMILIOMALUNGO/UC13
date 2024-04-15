import { Request, Response } from "express";
import { CriarGradedauscServer } from "../../Services/Gradedausc/CriarGradedauscServer";


class CriarGradedauscController {
    async handle(req:Request, res:Response){

            const {nome,banner,categoriaId} = req.body
            // console.log("cont:",nome,usuarioId,categoriaId)
            
            if (!req.file) {
               throw new Error("imagem com problema")
                
            }
            else{
                const {originalname, filename:banner} = req.file
                const CriarProdutoController = new CriarGradedauscServer ()
                const Produto = await CriarProdutoController.execute({
                    nome,banner,categoriaId,
                })
               // console.log(Produto)
                  return res.json(Produto)
            }
       
        }
    }

export{CriarGradedauscController}