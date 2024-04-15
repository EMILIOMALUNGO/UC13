import { Request, Response } from "express";
import { ListarPedidoServicesID } from "../../Services/Pedidos/ListarPedidoServicesID";


class ListarPedidoControllerID{
    async handle(req:Request, res:Response){

        const {id}=req.params
        //console.log(id)

        const  ListarPedidoControllerID= new  ListarPedidoServicesID ()
        const listarId = await ListarPedidoControllerID.execute({id})

        //console.log(listarId)  
        return res.json(listarId)
    }

}
export {ListarPedidoControllerID}