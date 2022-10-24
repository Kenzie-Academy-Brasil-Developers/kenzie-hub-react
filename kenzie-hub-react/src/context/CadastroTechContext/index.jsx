import { createContext, useEffect, useState } from "react";
import api from "../../services";

export const CadastroTechContext = createContext({});

const CadastroProvider = ({ children }) => {
  const [TechsList, setTechsList] = useState([]);
  const [tecnologia, setTecnologia] = useState("");
  const [status, setStatus] = useState("Iniciante");
  const [modal, setModal] = useState(false);

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
      const listaCadastro = await api.post("/users/techs", newTecnologia);
    setTechsList([...TechsList, listaCadastro])
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTech(e) {
    TechsList.filter(item => {
      if (item.id === e.target.alt) {
      api.delete(`/users/techs/${item.id}`);
      }
     return TechsList
    });
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
  }, [TechsList]);

  return (
    <CadastroTechContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        cadastrarTechs,
        removeTech,
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
