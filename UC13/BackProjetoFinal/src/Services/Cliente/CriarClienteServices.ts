import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'


interface CriarCliente{
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

class CriarClienteServices{
   async execute({nome, email , cpf, celular, fixo, rua, complemento ,cep,bairro,cidade, estado, password}:CriarCliente){

    if (!nome ||! email ||!cpf || !celular|| !fixo || !rua ||!complemento || !cep || !bairro|| !cidade ||! estado ||!password) {

        throw new Error("Preencha os campos vasio")        
    }
      const criarCliente = await prismaClient.cliente.findFirst({
        where:{
            OR:[
              {
                  cpf:cpf
              },
              {
                email:email
              }

            ]}
            
        })
        
        if (criarCliente) {
            throw new Error('CPF/CNPJ - RG/IE já esta cadastrado')
    }
    const senhaCrypt = await hash(password, 8)
        await prismaClient.cliente.create({
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
                email :true, 
                cpf:true,      
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
        return {dados:"cliente salvo com sucesso"}
   }

}
export{CriarClienteServices}