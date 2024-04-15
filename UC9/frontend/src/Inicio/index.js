import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import './inicio.estilo.scss'

Modal.setAppElement('#root')

export default function Inicio() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')

    const [modalAberto, setModalAberto] = useState(false)

    useEffect(() => {
        const iToken = localStorage.getItem('@tklogin2023')
        const token = JSON.parse(iToken)
        if (!token) {
            navigation('/')
            return
        } else if (token) {
            async function verificaToken() {
                const resposta = await apiLocal.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                if (resposta.data.dados) {
                    navigation('/')
                    return
                } else if (resposta.data.id) {
                    navigation('/Dashboard')
                }
            }
            verificaToken()
        }
    }, [])

    async function handleLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warn('Existem Campos em Branco')
        }
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
            if (resposta.data.id) {
                const token = resposta.data.token
                localStorage.setItem('@tklogin2023', JSON.stringify(token))
                toast.success('Login Efetuado com Sucesso')
                navigation('/Dashboard')
            }
        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    async function handleCadastrar(e) {
        e.preventDefault()
        if (!nome || !email || !password) {
            toast.warn('Existem Campos em Branco')
        }
        try {
            await apiLocal.post('/CriarUsuarios', {
                nome,
                email,
                password
            })
            setModalAberto(false)

        } catch (err) {
            toast.error(err.response.data.error)
            return
        }
    }

    function abrirModal() {
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
    }

    return (
        <div>
            <div className='loginInicio'>
                <h1>Login</h1>
            </div>
            <div className='formInicio'>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                </form>
                <p>Para se cadastrar clique <button className='buttonAqui' onClick={abrirModal}>AQUI</button></p>
                <Modal
                    isOpen={modalAberto}
                    onRequestClose={fecharModal}
                >
                    <div className='formInicio'>
                        <h2>Cadastro de Usuário</h2>
                        <form onSubmit={handleCadastrar}>
                            <label>Nome:</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            <label>Email:</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Senha:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type='submit'>Enviar</button>
                            <button onClick={fecharModal}>Fechar</button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div >
    )
}