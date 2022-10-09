import { FormRegisterStyle } from "./style"


const FormRegister = () => {

    return (
        <FormRegisterStyle>
            <h2>Cria sua conta</h2>

            <p>Rapido e grátis, vamos nessa</p>

            <form>
                <label>Nome</label>
                <input type="text" placeholder="Digite aqui seu nome" />
                
                <label>Email</label>
                <input type="email" placeholder="Digite aqui seu email" />
                
                <label>Senha</label>
                <input type="password" placeholder="Digite aqui sua senha" />
                
                <label>Confirmar Senha</label>
                <input type="password" placeholder="Confirme aqui seu senha" />
                
                <label>Bio</label>
                <input type="text" placeholder="Fale sobre você" />
                
                <label>Contato</label>
                <input type="number" placeholder="Opção de contato" />
                
                <label>Selecionar Módulo</label>
                <input type="text" placeholder="Primeiro Módulo" />

                <button>Cadastrar</button>

            </form>

        </FormRegisterStyle>
    )
}

export default FormRegister