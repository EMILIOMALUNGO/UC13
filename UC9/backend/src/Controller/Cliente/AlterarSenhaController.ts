import { Request,Response } from "express";
import { AlterarSenhaServer } from "../../Services/Cliente/AlterarSenhaServer";



class AlterarSenhaController{
  async handle(req:Request,res:Response){

      const {id,password}=req.body
       
    const AlterarSenhaController = new  AlterarSenhaServer()
    const  AlterarSenha = await AlterarSenhaController.execute({
       id, password
    })
      return res.json(AlterarSenha)
  }

}
export {AlterarSenhaController}