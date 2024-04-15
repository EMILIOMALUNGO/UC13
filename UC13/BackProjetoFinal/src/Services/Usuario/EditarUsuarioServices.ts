 //  para  poder criar o alterar usuario primeiro tem que criar o editar usuario 
 //no ediatar usuario vc vai ter o ID com  o valor do Id vc consegue alterar o usuario poriso primeiro vc vai ter que criar o Editar o usuario 
 
 import prismaClient from "../../prisma";

interface EditarUsuario{
    id:string
}
class EditarUsuarioServices{
    async execute({id}:EditarUsuario){
        //console.log(id)

   const editarUsuarioServices = await prismaClient.usuario.findMany({
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
    
    return {dados:"dados Alterados"} 
    
}

}
export {EditarUsuarioServices}