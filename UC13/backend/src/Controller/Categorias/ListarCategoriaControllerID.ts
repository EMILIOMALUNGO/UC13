import { Request,Response } from "express";
import { ListarCategoriaServicesID } from "../../Services/Categorias/ListarCategoriaServicesID";




class ListarCategoriaControllerID{
    async handle(req:Request, res:Response){

        const {id} =req.params

        const listarCategoriaControllerID = new  ListarCategoriaServicesID()
        const  ListarCategoriID = await listarCategoriaControllerID.execute({
            id
        })
    return res.json(ListarCategoriID)
    }

}
export {ListarCategoriaControllerID}