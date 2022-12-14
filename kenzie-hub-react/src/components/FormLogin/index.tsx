import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLoginStyle } from "./style";
import Toast from "../Toast";

const FormLogin = () => {
  const { toast, LoginUsers, schemaLoginUser }: any = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginUser),
  });

  return (
    <FormLoginStyle>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(LoginUsers)}>
        <label>
          Email
          <input
            type="email"
            {...register("email")}
            placeholder="123@kenziehub.com.br"
          />
          <h6>{errors.email?.message as string}</h6>
        </label>

        <label>
          Senha
          <input
            type="password"
            {...register("password")}
            placeholder=" *  *  *  *  *  *  *  *"
          />
          <h6>{errors.password?.message as string} </h6>
        </label>

        <button type="submit">Entrar</button>

        <span>Ainda não possui uma conta ?</span>
        <Link to="/Register">
          <div className="LinkRegister"> Cadastrar-se</div>
        </Link>
      </form>
      {toast ? <Toast /> : <></>}
    </FormLoginStyle>
  );
};

export default FormLogin;
