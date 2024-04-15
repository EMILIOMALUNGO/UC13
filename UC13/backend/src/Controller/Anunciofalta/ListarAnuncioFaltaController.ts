import { Request, Response } from "express";
import { ListarAnuncioFaltaService } from "../../Services/Anunciofalta/ListarAnuncioFaltaService";



class ListarAnuncioFaltaController{
    async handle(req:Request, res:Response) {

        const listarAnuncioFaltaController = new ListarAnuncioFaltaService()
        const listarAnuncio= await listarAnuncioFaltaController .execute()
       return res.json(listarAnuncio)
    }
}
export {ListarAnuncioFaltaController}