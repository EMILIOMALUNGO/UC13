import { Request,Response } from "express"
import { AlterarIntemServices } from "../../Services/Item/AlterarIntemServices"




class AlterarItemController{
  async handle(req:Request,res:Response){

    const{id,quantidade,valor,ProdutoId}=req.body

    const alterarItemController = new  AlterarIntemServices()
    const  AlterarIntem = await alterarItemController.execute({
        id,quantidade,valor,ProdutoId
     
    })
    return res.json(AlterarIntem)
  }
}
export{AlterarItemController}