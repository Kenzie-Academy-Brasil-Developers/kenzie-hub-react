import { useContext } from "react";
import lixo from "../../assets/lixo.png";
import { CadastroTechContext } from "../../context/CadastroTechContext";
import { CardStyle } from "./style";

const Card = ({ list }) => {
  const { removeTech } = useContext(CadastroTechContext);

  return (
    <CardStyle id={list.id}>
      <p>{list.title}</p>
      <span>{list.status}</span>
      <img src={lixo} alt={list.id} onClick={removeTech}></img>
    </CardStyle>
  );
};

export default Card;
