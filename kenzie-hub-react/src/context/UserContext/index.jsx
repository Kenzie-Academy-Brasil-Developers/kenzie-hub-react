import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services";

export const UserContext = createContext({});
/*  component provider  */
const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  /*  */
  useEffect(() => {
    async function loadUserProfile() {
      const token = localStorage.getItem("@kenziehub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const profile = await api.get("/profile");
        
          setUser(profile);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUserProfile();
  }, []);

  /* 
    SECAO REGISTRAR USUARIO
*/
  const schemaRegisterUser = yup.object({
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "no minimo 8 caracters")
      .required("Senha é obrigatório"),
    name: yup.string().required("Nome é obrigatório"),
    bio: yup.string().required("Deve conter uma Bio"),
    contact: yup.string().required("Deve conter uma rede número de contato"),
    course_module: yup.string().required("Deve conter um Módulo"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmação de senha deve ser igual a senha"
      ),
  });

  async function RegisterUser(data) {
    try {
      await api.post("/users", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  /* 
    SECAO  LOGIN USUARIO
*/
  const schemaLoginUser = yup.object({
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "no minimo 8 caracters")
      .required("Senha é obrigatório"),
  });
  
  async function LoginUsers(data) {
    try {
      const response = await api.post("/sessions", data);
      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@kenziehub:token", response.data.token);

      const toNavigate = location.state?.from?.pathname || "dashboard";

      navigate(toNavigate, { replace: true });
    } catch (error) {
      
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        LoginUsers,
        RegisterUser,
        schemaLoginUser,
        schemaRegisterUser,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
