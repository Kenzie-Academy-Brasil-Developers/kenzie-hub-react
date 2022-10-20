import { useContext } from "react";
import { CadastroTechContext } from "../../context/CadastroTechContext";

import Card from "../Card";
import { ModalTechs } from "../ModalTechs";
import { ListStyle } from "./style";

const CardList = () => {
  const { modal, openModal, TechsList } = useContext(CadastroTechContext);

  return (
    <ListStyle>
      <div>
        <h1>Tecnologias</h1>
        <button onClick={openModal}> + </button>
      </div>

      <div className="lista">
        {modal ? <ModalTechs /> : <></>}

        <ul>
          {TechsList.map((list, i) => (
            <Card key={i} TechsList={TechsList} list={list} />
          ))}
        </ul>
      </div>
    </ListStyle>
  );
};

export default CardList;
