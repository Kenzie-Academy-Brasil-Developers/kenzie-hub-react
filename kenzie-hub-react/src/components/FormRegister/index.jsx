import { useState } from "react"
import { FormRegisterStyle } from "./style"


const FormRegister = () => {

    const [ nome, setName] = useState
    const [ email, setEmail] = useState

    function RegisterUser (evt) {
        evt.preventDefault()
        console.log(evt.target.value)
    }

    return (
        <FormRegisterStyle>

            <h2>Crie sua conta</h2>

            <p>Rapido e grátis, vamos nessa</p>

            <form onSubmit={RegisterUser}>
                <label>
                    Nome
                    <input type="text" placeholder="Digite aqui seu nome" />
                </label>
                
                <label>
                    Email
                    <input type="email" placeholder="Digite aqui seu email" />
                </label>
                
                <label>
                    Senha
                    <input type="password" placeholder="Digite aqui sua senha" />
                </label>
                
                <label>
                    Confirmar Senha
                    <input type="password" placeholder="Confirme aqui seu senha" />
                </label>
                
                <label>
                    Bio
                    <input type="text" placeholder="Fale sobre você" />
                </label>
                
                <label>
                    Contato
                    <input type="number" placeholder="Opção de contato" />
                </label>
                
                <label>
                    Selecionar Módulo
                    <input type="text" placeholder="Primeiro Módulo" />
                </label>

                <button type="submit">Cadastrar</button>

            </form>

        </FormRegisterStyle>
    )
}

export default FormRegister