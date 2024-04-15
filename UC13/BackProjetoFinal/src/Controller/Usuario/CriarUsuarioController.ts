import { Response,Request } from "express";
import { CriarUsuarioaServices } from "../../Services/Usuario/CriarUsuarioServices";


class CriarUsuarioController{
   async handle (req:Request, res:Response){
       
    const {nome, email , cpf,celular, fixo, rua, complemento ,cep,bairro,cidade, estado,password} = req.body
   // console.log(nome,email,password)
    
    if (!nome ||! email ||!cpf || !celular|| !fixo || !rua ||!complemento || !cep || !bairro|| !cidade ||! estado ||!password) {
        throw new Error("tem campos vasio no controler")     
    }
        const criarUsuarioacontroller = new  CriarUsuarioaServices()
        const  CriarUsuario = await criarUsuarioacontroller.execute({
            nome, email , cpf, celular, fixo, rua, complemento ,cep,bairro,cidade, estado,password
        })

        return res.json(CriarUsuario)
   }


}
export{CriarUsuarioController}
