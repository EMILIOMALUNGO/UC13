import { Request, Response } from "express";
import { ListarAtividadeVagaServerID } from "../../Services/AtividadeVaga/ListarAtividadeVagaServerID";





class ListartAtividadeVagaControllerID{
    async handle (req:Request,res:Response){

        const {id} = req.params

      const listartGradedauscControllerID = new ListarAtividadeVagaServerID ()
      const ListarAtividadeID = await listartGradedauscControllerID.execete({id})
      return res.json(ListarAtividadeID)
    }
}


export {ListartAtividadeVagaControllerID}