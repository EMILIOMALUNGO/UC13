import { Request,Response } from "express";
import { ListarCategoriaServices } from "../../Services/Categoria/ListarCategoriaServices";



class ListarCategoriasController{
     async handle(req:Request, res:Response){

        const listarCategoriasController = new ListarCategoriaServices()
        const listarCategoria = await listarCategoriasController.execute()
        return res.json(listarCategoria)
     }

}
export {ListarCategoriasController}