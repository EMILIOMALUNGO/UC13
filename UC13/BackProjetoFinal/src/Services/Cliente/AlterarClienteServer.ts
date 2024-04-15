import prismaClient from "../../prisma";

interface AlterarCliente{
    id :string
    email :string
    nome:string       
    cpf:string    
    celular :string   
    fixo  :string     
    rua  :string      
    complemento :string
    cep  :string       
    bairro :string    
    cidade :string    
    estado :string    
}


class AlterarClienteServer{
   async execute ({id,nome, email ,cpf,celular,fixo,rua,complemento,cep,bairro,cidade,estado}:AlterarCliente){
         
       await prismaClient.cliente.update({
        where:{
            id :id ,
        },
        data:{
            nome:nome, 
            email : email,  
            cpf:   cpf,   
            celular:celular,    
            fixo :fixo,      
            rua  : rua,     
            complemento:complemento, 
            cep  : cep,     
            bairro : bairro,   
            cidade : cidade,   
            estado: estado
        }
  
      })
       return {dados:"dados do cliente Alterado"}
   }
}
export {AlterarClienteServer}