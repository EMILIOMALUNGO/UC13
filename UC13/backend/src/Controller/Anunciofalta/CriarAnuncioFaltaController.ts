import { Request, Response } from "express";
import { CriarAnuncioFaltaService } from "../../Services/Anunciofalta/CriarAnuncioFaltaService";


class CriarAnuncioFaltaController {
    async handle(req:Request, res:Response){

            const {nome,banner,categoriaId} = req.body
            // console.log("cont:",nome,usuarioId,categoriaId)
            
            if (!req.file) {
               throw new Error("imagem com problema")
                
            }
            else{
                const {originalname, filename:banner} = req.file
                const criarAnuncioFaltaController = new  CriarAnuncioFaltaService()
                const Produto = await criarAnuncioFaltaController.execute({
                    nome,banner,categoriaId,
                })
               // console.log(Produto)
                  return res.json(Produto)
            }
       
        }
    }

export{CriarAnuncioFaltaController}