import prismaClient from "../../prisma";



interface AlterarUsuario{
    id:string
    nome  :      string
    email :      string
    cpf_cnpj:    string
    rg_Ie:       string
    celular:     string
    rua:         string
    complemento: string
    bairro:      string
    cidade :     string
    estado:      string
    
  
}

class AlterarClienteServer{
   async execute({id,nome, email , cpf_cnpj, rg_Ie, celular, rua, complemento,bairro,cidade, estado}:AlterarUsuario){

    await prismaClient.cliente.update({
        where:{
            id:id,
        },
        data:{
            nome:nome,
            email:email,
            cpf_cnpj:cpf_cnpj,
            rua:rua,
            rg_ie:rg_Ie,
            celular:celular,
            complemento:complemento,
            bairro:bairro,
            cidade:cidade,
            estado:estado,

        }     
      
    })
    return {dados:"Usuario Alterado"}
    
   }
}
export{AlterarClienteServer}

