import { Request,Response } from "express";
import { AparClienteServices } from "../../Services/Cliente/AparClienteServices";



class ApagarClienteController{
   async handle(req:Request, res:Response){
   
        const {apagar} = req.body
    const apagarClienteController = new  AparClienteServices ()
    const aparCliente= await  apagarClienteController.execute({
        apagar
    })
       return res.json(aparCliente)
   }

}

export {ApagarClienteController}