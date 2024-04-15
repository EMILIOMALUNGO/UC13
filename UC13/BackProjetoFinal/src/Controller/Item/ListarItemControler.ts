import { Request,Response } from "express";
import { ListarItemServices } from "../../Services/Item/ListarItemServices";



class ListarItemControler{
    async handle(req:Request, res:Response ){

        const ListarItemControler = new ListarItemServices()
        const listarItem = await ListarItemControler.execute()   
       return res.json(listarItem)

    }
}
export {ListarItemControler}