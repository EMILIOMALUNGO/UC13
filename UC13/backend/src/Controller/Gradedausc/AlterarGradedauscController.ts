import { Request,Response } from "express"
import { AlterarGradedauscServer } from "../../Services/Gradedausc/AlterarGradedauscServer"



class AlterarGradedauscController{
 async handle(req:Request, res:Response){

   const {id,nome,banner,categoriaId} = req.body
   const alterarGradedauscController = new AlterarGradedauscServer()
   const alterarGrade = await alterarGradedauscController.execute({
   id, nome,banner,categoriaId
   })
   return res.json(alterarGrade)
 }
}
export {AlterarGradedauscController}