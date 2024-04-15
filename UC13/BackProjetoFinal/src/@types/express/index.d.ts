declare namespace Express{
    export interface Request{
        user_id:string
    }
}
// quando vc fazer  isso tem que ir ate tsconfig.json na linha 35 e coloca esse codigo "typeRoots": ["./src/@types"], 