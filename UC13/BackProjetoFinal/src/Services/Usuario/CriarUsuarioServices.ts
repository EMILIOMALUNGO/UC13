import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";


interface CriarUsuarioa{
    nome  :      string
    email :      string
    cpf:         string
    celular:     string
    fixo:        string
    rua:         string
    complemento: string
    cep:         string
    bairro:      string
    cidade :     string
    estado:      string
    password:    string
}


class CriarUsuarioaServices{
    async execute({nome, email , cpf , celular, fixo, rua, complemento ,cep,bairro,cidade, estado, password}:CriarUsuarioa){
 
        if (!nome ||! email ||!cpf  || !celular|| !fixo || !rua ||!complemento || !cep || !bairro|| !cidade ||! estado ||!password) {
            throw new Error ("Preencher os campos vasio")
            
        }

        const usuario = await prismaClient.usuario.findFirst({
            where:{
                email:email,
            }
           
        })
            if (usuario) {
                throw new Error ("Email ja cadastrado ")
                
            }
            const senhaCrypt = await hash(password, 8)
            await prismaClient.usuario.create({
                data:{
                    nome :  nome, 
                    email :  email, 
                    cpf: cpf,     
                    celular: celular,  
                    fixo:    fixo,        
                    rua:      rua,  
                    complemento:complemento,
                    cep: cep,
                    bairro: bairro,
                    cidade :    cidade ,    
                    estado:    estado,  
                    senha: senhaCrypt 
    
                },select:{
                    nome :  true, 
                    email : true, 
                    cpf:   true,       
                    celular: true,  
                    fixo:    true,        
                    rua:      true,  
                    complemento: true,
                    cep: true,
                    bairro: true,
                    cidade :    true ,    
                    estado:    true,  
                     
                }
            })
             return {dados:"usuario cadastrado com sucesso"}

    }

}
export{CriarUsuarioaServices}