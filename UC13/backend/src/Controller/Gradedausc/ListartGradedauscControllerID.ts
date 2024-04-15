import { Request,Response } from "express"
import { ListartGradedauscServerID } from "../../Services/Gradedausc/ListartGradedauscServerID"



class ListartGradedauscControllerID{
    async handle(req:Request,res:Response){

        const {id}=req.params
      const listartGradedauscControllerID = new ListartGradedauscServerID()
      const ListartGradedaId = await listartGradedauscControllerID.execete({id})
      return res.json(ListartGradedaId)
    }
}
export {ListartGradedauscControllerID}