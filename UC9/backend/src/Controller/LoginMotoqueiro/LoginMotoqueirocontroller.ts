import { Request,Response } from "express";

import { LoginMotoqueiroServer } from "../../Services/LoginMotoqueiro/LoginMotoqueiroServer";


class LoginMotoqueirocontroller{
    async handle(req:Request, res:Response){

        const { nusuario,password}=req.body

        const loginMotoqueirocontroller = new LoginMotoqueiroServer()

        const resposta  = await  loginMotoqueirocontroller.execute({
            nusuario,password
        })
           return res.json(resposta)
    }

}
export{LoginMotoqueirocontroller}