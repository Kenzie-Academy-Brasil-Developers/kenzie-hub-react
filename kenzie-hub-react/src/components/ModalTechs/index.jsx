import { useContext } from "react";
import { CadastroTechContext } from "../../context/CadastroTechContext";
import { ModalStyle } from "./style";

export const ModalTechs = () => {
  const { closeModal, cadastrarTechs, setTecnologia, setStatus } =
    useContext(CadastroTechContext);

  return (
    <ModalStyle>
      <section>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeModal}> X </button>
        </div>

        <form onSubmit={cadastrarTechs}>
          <label>
            {" "}
            Nome
            <input
              type="text"
              onChange={(e) => setTecnologia(e.target.value)}
              placeholder="Adicione uma tecnologia"
            />
          </label>

          <label>
            Selecionar Status
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário </option>
              <option value="Avançado">Avançado </option>
            </select>
          </label>

          <button type="submit" className="cadastrotech">
            Cadastrar Tecnologia
          </button>
        </form>
      </section>
    </ModalStyle>
  );
};
