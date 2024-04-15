import prismaClient from "../../prisma";




interface ListarUsuarioId{
    id: string
}

class ListarClienteServerID{
   async execute({id}:ListarUsuarioId){
   // console.log(id)

    const ListarUsuarioId = await prismaClient.cliente.findUnique({
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
         
           
        }
    })
      return(ListarUsuarioId )
   }

}
export {ListarClienteServerID}



