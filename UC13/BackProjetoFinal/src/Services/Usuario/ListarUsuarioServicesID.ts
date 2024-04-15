import prismaClient from "../../prisma";


interface ListarUsuarioId{
    id: string
}

class ListarUsuarioServicesID{
   async execute({id}:ListarUsuarioId){
   // console.log(id)

    const ListarUsuarioId = await prismaClient.usuario.findUnique({
        where:{
            id:id
        },select:{
            id:true,
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
      return(ListarUsuarioId )
   }

}
export {ListarUsuarioServicesID}