import { Request,Response } from "express"
import { AlterarReuniaoServer } from "../../Services/Reuniao/AlterarReuniaoServer"


class AlterarReuniaoController{
 async handle(req:Request, res:Response){

   const {id,nome,banner} = req.body
   const alterarReuniaoController = new AlterarReuniaoServer()
   const  alterarReuniao = await  alterarReuniaoController.execute({
   id, nome,banner
   })
   return res.json(alterarReuniao)
 }
}
export {AlterarReuniaoController}