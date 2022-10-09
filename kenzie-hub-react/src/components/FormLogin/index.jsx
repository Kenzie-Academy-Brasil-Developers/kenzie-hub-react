import { FormLoginStyle } from "./style"
import { Link } from "react-router-dom"

const FormLogin = () => {

    return  (
        <FormLoginStyle>

              <h2>Login</h2>

            <form >

                <label>Email</label>
                <input type="email" placeholder="123@kenziehub.com.br" />

                <label>Senha</label>
                <input type="password" placeholder=" *  *  *  *  *  *  *  *" />

                <button>Entrar</button>
                <span>Ainda não possui uma conta ?</span>
                <Link to="/"><button className="LinkRegister"> Cadastrar-se</button></Link>
        
            </form>
        </FormLoginStyle>

    )
}

export default FormLogin