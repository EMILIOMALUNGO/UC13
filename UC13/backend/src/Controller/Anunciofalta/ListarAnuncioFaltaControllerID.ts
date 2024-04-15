import { Request,Response } from "express"
import { ListarAnuncioFaltaServiceID } from "../../Services/Anunciofalta/ListarAnuncioFaltaServiceID"



class ListarAnuncioFaltaControllerID{
    async handle(req:Request,res:Response){

        const {id}=req.params
      const listarAnuncioFaltaControllerID = new  ListarAnuncioFaltaServiceID()
      const ListarAnuncio = await listarAnuncioFaltaControllerID.execete({id})
      return res.json(ListarAnuncio)
    }
}
export {ListarAnuncioFaltaControllerID}