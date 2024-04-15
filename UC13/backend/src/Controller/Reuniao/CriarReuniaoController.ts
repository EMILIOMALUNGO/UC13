import { Request, Response } from "express";
import { CriarReuniaoServer } from "../../Services/Reuniao/CriarReuniaoServer";



class CriarReuniaoController{
    async handle(req:Request, res:Response){

            const {nome,banner,categoriaId} = req.body
             console.log("cont:",nome,categoriaId)
            
            if (!req.file) {
               throw new Error("imagem com problema")
                
            }
            else{
                const {originalname, filename:banner} = req.file
                const criarReuniaoController = new CriarReuniaoServer()
                const Produto = await criarReuniaoController.execute({
                    nome,banner,categoriaId,
                })
               // console.log(Produto)
                  return res.json(Produto)
            }
       
        }
    }

export{CriarReuniaoController }