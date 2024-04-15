import React from "react"



import './formulario.css'
export default function Cadastrar() {

    return (
        <div className="container1">
            <div className="container2">
                <form>
                    <div className="texto1">
                        <legend>cadastrodo de pessoas</legend>
                    </div>
                    <fieldset>
                        <div className="texto2">
                            <p>Preencha as informações abaixo</p>
                        </div>
                        <div className="info">
                            <div>
                                <label for="nome">Nome completo </label>
                                <input type="text" placeholder="colcoca seu nome" required />
                            </div>
                        </div>

                        <div className="info1">
                            <div className="numero">
                                <label for="numer">CPF</label>
                                <input placeholder="coloca seu cps" required />
                            </div>

                            <div className="data">
                                <label for="data">RG/IE</label>
                                <input placeholder="coloca seu RG OU IE" required />
                            </div>

                            <div className="data">
                                <label for="data">Emil</label>
                                <input placeholder="coloca o seu email" required />
                            </div>
                        </div>

                        <div className="info1">
                            <div className="data">
                                <label for="data">Celular</label>
                                <input placeholder="coloca seu Celular" required />
                            </div>
                            <div className="data">
                                <label for="data">fixo</label>
                                <input placeholder="coloca o telefone fixo" required />
                            </div>
                            <div className="data">
                                <label for="data">Rua</label>
                                <input placeholder="rua" required />
                            </div>
                        </div>


                        <div className="info1">
                            <div className="data">
                                <label for="data">completo</label>
                                <input placeholder="complemento" required />
                            </div>
                            <div className="data">
                                <label for="data">Cep</label>
                                <input placeholder="cep" required />
                            </div>
                            <div className="data">
                                <label for="data">Bairro</label>
                                <input placeholder="Bairro" required />
                            </div>
                        </div>

                        <div className="info1">
                            <div className="data">
                                <label for="data">Cidade</label>
                                <input placeholder="coloca a cidade" required />
                            </div>
                            <div className="data">
                                <label for="data">estado</label>
                                <input placeholder="coloca o estado" required />
                            </div>
                            <div className="data">
                                <label for="data">password</label>
                                <input placeholder="coloca o password" required />
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    )
}