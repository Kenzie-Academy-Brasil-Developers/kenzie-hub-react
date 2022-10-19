import { useContext } from "react";
import { UserContext } from "../../context/UserContext"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterStyle } from "./style";

const FormRegister = () => {
  const {RegisterUser, schemaRegisterUser} = useContext(UserContext);

  const { register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schemaRegisterUser),
  });
    
  return (
    <FormRegisterStyle>
      <h2>Crie sua conta</h2>

      <p>Rapido e grátis, vamos nessa</p>

      <form onSubmit={handleSubmit(RegisterUser)}>

        <label>
          Nome
          <input type="text" {...register("name")}
            placeholder="Digite aqui seu nome"
          />
          <h6>{errors.name?.message}</h6>
        </label>

        <label>
          Email
          <input type="email" {...register("email")}
            placeholder="Digite aqui seu email"
          />
          <h6>{errors.email?.message}</h6>
        </label>

        <label>
          Senha
          <input type="password" {...register("password")}
            placeholder="Digite aqui sua senha"
          />
          <h6>{errors.password?.message}</h6>
        </label>

        <label>
          Confirmar Senha
          <input type="password" {...register("confirmPassword")}
            placeholder="Confirme aqui seu senha"
          />
          <h6>{errors.confirmPassword?.message}</h6>
        </label>

        <label>
          Bio
          <input type="text" {...register("bio")}
            placeholder="Fale sobre você"
          />
          <h6>{errors.bio?.message}</h6>
        </label>

        <label>
          Contato
          <input type="text" {...register("contact")}
            placeholder="Opção de contato"
          />
          <h6>{errors.contact?.message}</h6>
        </label>

        <label>
          Selecionar Módulo
          <select type="text" {...register("course_module")}>

                <option value="Primeiro módulo (Introdução ao FrontEnd)">Primeiro módulo</option>
                <option value="Segundo  módulo">Segundo  módulo</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo"> Quarto módulo</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </FormRegisterStyle>
)};

export default FormRegister;
