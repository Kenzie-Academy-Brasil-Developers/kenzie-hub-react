import { createContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../../services";

export const UserContext = createContext({});
/*  component provider  */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [messageToast, setMessageToast] = useState("");
    
  function abreModal() {
    setToast(true);
  }
  function fechaModal() {
    setToast(false);
  }
  function logout() {
    localStorage.removeItem("@kenziehub:token")
  }

  /* Get UserProfile */
  const token = localStorage.getItem("@kenziehub:token");
  useEffect(() => {
    async function loadUserProfile() {

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const profile = await api.get("/profile");
        
          setUser(profile.data);
          <Navigate to="dashboard" replace />
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUserProfile();
  }, [token]);

  /* RegiisteerUser*/
  const schemaRegisterUser = yup.object({
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "no minimo 8 caracters")
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/(\d)/, 'Deve conter ao menos um número')
      .matches(/(\W)|_/, 'Deve conter um caracter especial')
      .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
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
      setMessageToast(error.response.data.message);
      setToast(true);
    }
  }
  /* LoginUser */
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
      setMessageToast(error.response.data.message);
      setToast(true);
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
        logout,
        abreModal,
        fechaModal,
        toast,
        messageToast,
        setMessageToast,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
