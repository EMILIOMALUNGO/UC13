import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'
import './produtos.estilo.scss'


export default function Produtos() {

    const [categorias, setCategorias] = useState([''])
    const [nome, setNome] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')

    const [idCategoria, setIdCategoria] = useState('')
    const [imagem, setImagem] = useState(null)

    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)
    
    useEffect(() => {
        async function loadCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setCategorias(resposta.data)
        }
        loadCategorias()
    }, [categorias])

    function handleImagem(e){
        if(!e.target.files){
            return
        }
        const image = e.target.files[0]
        if(image.type === 'image/png' || image.type === 'image/jpeg'){
            setImagem(image)
        }
    }
    async function handleCadastrar(e) {
        try {
            e.preventDefault()
            const categoriaId = idCategoria
            const data = new FormData()

            data.append('nome', nome)
            data.append('fabricante', fabricante)
            data.append('quantidade', quantidade)
            data.append('preco', preco)
            data.append('categoriaId', categoriaId)
            data.append('file', imagem)

            const resposta = await apiLocal.post('/CriarProdutos', data, {
                
            })
            toast.success(resposta.data.dados)

        } catch (err) {
            console.log(err)
        }

        setNome('')
        setFabricante('')
        setQuantidade('')
        setPreco('')
        setImagem(null)
    }

    return (
        <div className="conteinerProdutosCadastro">
            <div>
                <h1>Produtos</h1>
            </div>
            <div>
                <form onSubmit={handleCadastrar}>
                    <select
                        value={idCategoria}
                        onChange={(e) => setIdCategoria(e.target.value)}
                    >
                        <option>Selecione...</option>
                        {categorias.map((item) => {
                            return (
                                <option
                                    value={item.id}>
                                    {item.nome}
                                </option>
                            )
                        })}
                    </select>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label>Fabricante:</label>
                    <input
                        type="text"
                        value={fabricante}
                        onChange={(e) => setFabricante(e.target.value)}
                    />
                    <label>Quantidade:</label>
                    <input
                        type="text"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                    <label>Preço:</label>
                    <input
                        type="text"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <label>Imagem:</label>
                    <input
                        type="file"
                        value={setImagem}
                        accept='image/jpeg, image/png'
                        onChange={handleImagem}
                    />                   
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}