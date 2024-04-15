import { Request, Response } from "express";
import { ListarItemServicesID } from "../../Services/Item/ListarItemServicesID";


class ListarItemControllerID{
  async handle(req:Request, res:Response){

    const {id}=req.body

    const listarItemControllerID = new ListarItemServicesID()
    const listarItem = await listarItemControllerID.execute({id})

    return res.json(listarItem)
  }
}
export {ListarItemControllerID}