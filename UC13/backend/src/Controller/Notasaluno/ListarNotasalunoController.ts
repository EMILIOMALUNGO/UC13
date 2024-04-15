import { Request, Response } from "express";
import { ListarNotasalunoServer } from "../../Services/Notasaluno/ListarNotasalunoServer";



class ListarNotasalunoController{
    async handle(req:Request, res:Response){
      const listarNotasalunoController = new ListarNotasalunoServer()
      const listarNotasa = await listarNotasalunoController.execute()
      return res.json(listarNotasa)
    }
}
export {ListarNotasalunoController}