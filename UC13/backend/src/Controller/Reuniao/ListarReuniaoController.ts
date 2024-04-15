import { Request, Response } from "express";
import { ListarReuniaoServer } from "../../Services/Reuniao/ListarReuniaoServer";


class ListarReuniaoController{
    async handle(req:Request, res:Response) {
        const listarReuniaoController = new ListarReuniaoServer()
        const ListarReuniao = await listarReuniaoController.execute()
       return res.json(ListarReuniao)
    }
}
export {ListarReuniaoController}