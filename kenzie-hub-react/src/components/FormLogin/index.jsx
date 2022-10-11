import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormLoginStyle } from "./style";
import api from "../../services";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "no minimo 8 caracters")
    .required("Senha é obrigatório"),
});

const FormLogin = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function LoginUsers(data) {
    await api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@kenziehub:token", response.data.token);
        Navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
      </form>
    </FormLoginStyle>
  );
};

export default FormLogin;
