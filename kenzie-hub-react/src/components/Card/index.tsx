import { useContext } from "react";
import lixo  from "../../assets/lixo.png"
import { CadastroTechContext } from "../../context/CadastroTechContext";
import { CardStyle } from "./style";

export interface ICardProps {
  list: {
    title: string;
    status: string;
    id: string;
  };
}

const Card = ({ list }: ICardProps) => {
  const { removeTech }: any = useContext(CadastroTechContext);

  return (
    <CardStyle id={list.id}>
      <p>{list.title}</p>
      <span>{list.status}</span>
      <img src={lixo} alt={list.id} onClick={removeTech}></img>
    </CardStyle>
  );
};

export default Card;
