import { FormLoginStyle } from "./style"
import { Link } from "react-router-dom"

const FormLogin = () => {

    function LoginUser (evt) {
        evt.preventDefault()
        console.log(evt.target.value)
    }

    return  (
        <FormLoginStyle>

              <h2>Login</h2>

            <form onSubmit={LoginUser}>

                <label>
                    Email
                    <input type="email" placeholder="123@kenziehub.com.br" />
                </label>

                <label>
                    Senha
                    <input type="password" placeholder=" *  *  *  *  *  *  *  *" />
                </label>

                <button type="submit" >Entrar</button>
                <span>Ainda não possui uma conta ?</span>
                <Link to="/Register"><button className="LinkRegister"> Cadastrar-se</button></Link>
        
            </form>
        </FormLoginStyle>

    )
}

export default FormLogin