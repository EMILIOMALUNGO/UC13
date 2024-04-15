import { Request,Response } from "express";
import { LoginUsuarioServices } from "../../Services/Loguin/LoginUsuarioServices";


class LoginUsuarioControlles{
    async handle(req:Request, res:Response){
        
        const {email,password}= req.body
         

        const loginUsuarioControlles = new LoginUsuarioServices()
        const  loginUsuario = await loginUsuarioControlles.execute({
            email,password
        })
        return res.json(loginUsuario)
    }
}
export {LoginUsuarioControlles}