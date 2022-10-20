import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const CadastroTechContext = createContext({});

const CadastroProvider = ({ children }) => {
  const [TechsList, setTechsList] = useState([]);

  const [modal, setModal] = useState(false);
  const [tecnologia, setTecnologia] = useState("");
  const [status, setStatus] = useState("Iniciante");

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  async function cadastrarTechs(evt) {
    evt.preventDefault();
    const token = localStorage.getItem("@kenziehub:token");

    const newTecnologia = {
      title: tecnologia,
      status: status,
    };
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post("/users/techs", newTecnologia);
      renderListaTechs();
    } catch (error) {
      console.log(error);
    }
  }

  const renderListaTechs = async () => {
    try {
      const profile = await api.get("/profile");
      const listaTech = profile.data.techs;

      setTechsList([...listaTech]);
    } catch (error) {}
  };

  useEffect(() => {
    renderListaTechs();
  }, []);

  return (
    <CadastroTechContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        cadastrarTechs,
        setTecnologia,
        setStatus,
        TechsList,
        renderListaTechs,
      }}
    >
      {children}
    </CadastroTechContext.Provider>
  );
};
export default CadastroProvider;
