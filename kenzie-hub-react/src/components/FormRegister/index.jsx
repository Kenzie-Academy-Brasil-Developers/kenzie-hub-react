import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services"
import { FormRegisterStyle } from "./style";

const schema = yup.object({
  email: yup.string().email("Deve ser um email válido").required("Email é obrigatório"),
  password: yup.string().min(8, "no minimo 8 caracters").required("Senha é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  bio: yup.string().required("Deve conter uma Bio"),
  contact: yup.string().required("Deve conter uma rede número de contato"),
  course_module: yup.string().required("Deve conter um Módulo"),
  confirmPassword: yup.string().oneOf(
    [yup.ref("password")],
  "confirmação de senha deve ser igual a senha"),
});

const FormRegister = () => {
    const Navigate = useNavigate()
    
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

function RegisterUser(data) {

    api.post("/users", 
        data
    ).then((response) => {
        Navigate("/")
    })
    .catch((error) => {
        console.log(error);
      })
  }

  return (
    <FormRegisterStyle>
      <h2>Crie sua conta</h2>

      <p>Rapido e grátis, vamos nessa</p>

      <form onSubmit={handleSubmit(RegisterUser)}>
        <label>
          Nome
          <input
            type="text"
            {...register("name")}
            placeholder="Digite aqui seu nome"
          />
          <h6>{errors.name?.message}</h6>
        </label>

        <label>
          Email
          <input
            type="email"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
          <h6>{errors.email?.message}</h6>
        </label>

        <label>
          Senha
          <input
            type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
          />
          <h6>{errors.password?.message}</h6>
        </label>

        <label>
          Confirmar Senha
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirme aqui seu senha"
          />
          <h6>{errors.confirmPassword?.message}</h6>
        </label>

        <label>
          Bio
          <input
            type="text"
            {...register("bio")}
            placeholder="Fale sobre você"
          />
          <h6>{errors.bio?.message}</h6>
        </label>

        <label>
          Contato
          <input
            type="text"
            {...register("contact")}
            placeholder="Opção de contato"
          />
          <h6>{errors.contact?.message}</h6>
        </label>

        <label>
          Selecionar Módulo
          <select type="text" {...register("course_module")}>

                <option value="1">Primeiro módulo</option>
                <option value="2">Segundo  módulo</option>
                <option value="3">Terceiro módulo</option>
                <option value="3"> Quarto módulo</option>
          </select>
          
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </FormRegisterStyle>
  );
};

export default FormRegister;
