import { Request,Response } from "express"
import { AlterarAnuncioFaltaService } from "../../Services/Anunciofalta/AlterarAnuncioFaltaService"



class AlterarAnuncioFaltaController{
 async handle(req:Request, res:Response){

   const {id,nome,banner,categoriaId} = req.body
   const alterarAnuncioFaltaController = new AlterarAnuncioFaltaService()
   const AlterarAnuncio = await alterarAnuncioFaltaController.execute({
   id, nome,banner,categoriaId
   })
   return res.json(AlterarAnuncio)
 }
}
export {AlterarAnuncioFaltaController}