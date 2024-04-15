import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'
import Modal from 'react-modal'
import './produtos.estilo.scss'


export default function Produtos() {

    const [categorias, setCategorias] = useState([''])
    const [nome, setNome] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')
    const [criarCategoria, setCriarCategoria] = useState('')

    const [idCategoria, setIdCategoria] = useState('')
    const [imagem, setImagem] = useState(null)

    const [modalAberto, setModalAberto] = useState(false)

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

    function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg') {
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
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
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

    async function handleCriarCategoria(e) {
        try {
            e.preventDefault()
            setCriarCategoria('')
            const nome = criarCategoria
            await apiLocal.post('/CriarCategorias', {
                nome
            },{
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.success('Categoria Cadastrada', {
                toastId: 'toastID'
            })

        } catch (err) {

        }

    }

    async function abrirModal() {
        setModalAberto(true)
    }

    async function fecharModal() {
        setModalAberto(false)
    }

    return (
        <div className="conteinerProdutosCadastro">
            <button onClick={abrirModal}>Criar Categoria</button>
            <Modal
                isOpen={modalAberto}
            >
                <h1>Criar Categorias</h1>
                <form onSubmit={handleCriarCategoria}>
                    <input
                        type="text"
                        value={criarCategoria}
                        onChange={(e) => setCriarCategoria(e.target.value)}
                    />
                    <button type='submit'>Criar</button>
                </form>

                <button onClick={fecharModal}>Fechar</button>

            </Modal>
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