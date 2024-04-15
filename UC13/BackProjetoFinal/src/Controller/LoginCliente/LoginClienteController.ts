import { Request,Response } from "express";
import { LoginClienteServer } from "../../Services/LoginCliente/LoginClienteServer";




class LoginClienteController{
    async handle(req:Request,res:Response){
      
       const {email,password}=req.body
      console.log('c',email,password)

    const loginClienteController = new LoginClienteServer()
    const loginCliente = await loginClienteController.execute({
        email,password
    }) 
   //console.log(loginCliente)
     return res.json(loginCliente)
    }
}
export {LoginClienteController}