import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLoginStyle } from "./style";
import Toast from "../Toast";

const FormLogin = () => {
  const { LoginUsers, schemaLoginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginUser),
  });

  const [toast, setToast] = useState(false);

  function abreModal() {
    setToast(true);
  }
  function fechaModal() {
    setToast(false);
  }

  return (
    <FormLoginStyle>
      <h2 onClick={abreModal}>Login</h2>

      <form onSubmit={handleSubmit(LoginUsers)}>
        <label>
          Email
          <input
            type="email"
            {...register("email")}
            placeholder="123@kenziehub.com.br"
          />
          <h6>{errors.email?.message}</h6>
        </label>

        <label>
          Senha
          <input
            type="password"
            {...register("password")}
            placeholder=" *  *  *  *  *  *  *  *"
          />
          <h6>{errors.password?.message}</h6>
        </label>

        <button type="submit">Entrar</button>

        <span>Ainda não possui uma conta ?</span>
        <Link to="/Register">
          <div type="submit" className="LinkRegister">
            {" "}
            Cadastrar-se
          </div>
        </Link>
        {toast ? <Toast fechaModal={fechaModal} /> : <></>}
      </form>
    </FormLoginStyle>
  );
};

export default FormLogin;
