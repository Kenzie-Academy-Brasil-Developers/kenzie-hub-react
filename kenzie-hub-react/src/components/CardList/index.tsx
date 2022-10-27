import { useContext } from "react";
import { CadastroTechContext } from "../../context/CadastroTechContext";
import Card from "../Card";
import { ModalTechs } from "../ModalTechs";
import { ListStyle } from "./style";

const CardList = () => {
  const { modal, openModal, TechsList }: any  = useContext(CadastroTechContext);

  return (
    <ListStyle>
      <div>
        <h1>Tecnologias</h1>
        <button onClick={openModal}> + </button>
      </div>

      <div className="lista">
        {modal ? <ModalTechs /> : <></>}

        <ul>
          {TechsList.map((list: any, i: any) => (
            <Card key={i}  list={list} />
          ))}
        </ul>
      </div>
    </ListStyle>
  );
};

export default CardList;
