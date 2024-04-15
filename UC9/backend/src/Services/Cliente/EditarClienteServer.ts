import prismaClient from "../../prisma";




interface  EditarClienteS{
    id:string
}

class EditarClienteServer{
   async execute({id}:EditarClienteS){
    const editarCliente = await prismaClient.cliente.findMany({
        where:{
            id:id
        },select:{
            id:true,
            nome :  true, 
            email :true, 
             cpf_cnpj:true,
             rg_ie : true,      
             celular: true,         
             rua:      true,  
             complemento: true,
            bairro: true,
            cidade :    true ,    
           estado:    true, 
           senha:true, 
        }

     })
   return   (editarCliente) 
}
    
}
export{EditarClienteServer}