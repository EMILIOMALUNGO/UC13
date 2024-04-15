import prismaClient from "../../prisma";

interface EditarCliente{
    id:string
}

class EditarClienteServices{
   async execute ({id}:EditarCliente){
      const EditarCliente = await prismaClient.cliente.findMany({
        where:{
            id:id
        },select:{
            id  :true,
            email :true,       
            nome :true,      
            cpf: true,   
            celular:true,    
            fixo : true,      
            rua :true,       
            complemento :true,
            cep : true,       
            bairro :true,     
            cidade :true,    
            estado :true, 
        }
      })
        return{dados:" Cliente é ditado com suceddo"}
   }

}
export{EditarClienteServices}
