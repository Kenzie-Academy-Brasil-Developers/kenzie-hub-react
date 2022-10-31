import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../services";

interface IProviderProps {
  children: ReactNode
}
export interface ITechsList{
  title:string,
  status: string,
  id: string
}

export const CadastroTechContext = createContext({});

const CadastroProvider = ({ children }: IProviderProps) => {
  const [TechsList, setTechsList] = useState<ITechsList[]>([]);
  const [tecnologia, setTecnologia] = useState("");
  const [status, setStatus] = useState("Iniciante");
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  async function cadastrarTechs(evt: { preventDefault: () => void; }) {
    evt.preventDefault();
    const token = localStorage.getItem("@kenziehub:token");

    const newTecnologia = {
      title: tecnologia,
      status: status,
    };
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const listaCadastro: ITechsList = await api.post("/users/techs", newTecnologia);
      console.log(listaCadastro)
    setTechsList([...TechsList, listaCadastro])
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTech(e: { target: { alt: string }}) {
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
    } catch (error) {
      console.log(error)
    }
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
