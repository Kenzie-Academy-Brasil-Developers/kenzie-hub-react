import { useContext } from "react";
import lixo from "../../assets/lixo.png";
import { CadastroTechContext } from "../../context/CadastroTechContext";
import api from "../../services";
import { CardStyle } from "./style";

const Card = ({ TechsList, list }) => {
  const { renderListaTechs } = useContext(CadastroTechContext);
  async function removeTech(e) {
    TechsList.filter((item, i) => {
      if (item.id === e.target.alt) {
        const listDelete = api.delete(`/users/techs/${item.id}`);
        renderListaTechs(listDelete);
      }
    });
  }

  return (
    <CardStyle id={list.id}>
      <p>{list.title}</p>
      <span>{list.status}</span>
      <img src={lixo} alt={list.id} onClick={removeTech}></img>
    </CardStyle>
  );
};

export default Card;
