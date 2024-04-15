import { Request,Response } from "express"
import { ListarReuniaoServerID } from "../../Services/Reuniao/ListarReuniaoServerID"


class ListarReuniaoControllerID{
    async handle(req:Request,res:Response){

        const {id}=req.params
      const listarReuniaoControllerID = new  ListarReuniaoServerID()
      const listarReuniaoid = await listarReuniaoControllerID .execete({id})
      return res.json(listarReuniaoid)
    }
}
export {ListarReuniaoControllerID}