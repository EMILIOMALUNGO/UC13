import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


 interface Payload{
    sub:string

 }


export function isAutenticado(req:Request,res:Response,next:NextFunction){
 
    const autetToken = req.headers.authorization
    //console.log(autetToken)

     if (!autetToken) {
      return res.json({dados:"Token Invalido"})
       // return res.status(401).end()
      
    }
   //  console.log(autetToken)
      const [ ,token]= autetToken.split(' ')
       // console.log(token)

       if (!token || token==='' || token==='null') {
         return res.json({dados:"Token Invalido"})
   }

     try{
        // essa linha serve para vericar se o token é valido e te retorna o id
        const { sub } = verify(
            token,
            process.env.JWT_SEGREDO
    //se essa linha de cima aparecer erro mesmo depois de vc colocar este nome JWT_SEGREDO no env.  entao vai na pasta tsconfig.json
    //na linha 85 troca para false
        
        )as Payload   
       // console.log(sub)
       req.user_id = sub
       return next()
       
     }catch(err){
        return res.status(401).end()

     }
}