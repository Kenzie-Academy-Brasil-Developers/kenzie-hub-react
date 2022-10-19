import { ModalStyle } from "./style"

import api from "../../services";
import { useState } from "react";

export const ModalTechs = ({closeModal}) => {
    
    const [tecnologia, setTecnologia] = useState("")
    const [status, setStatus] = useState("Iniciante")

    function cadastrarTechs (evt) {
        evt.preventDefault()
        const token = localStorage.getItem("@kenziehub:token");
        
        const newTecnologia = {
            title: tecnologia,
            status: status,
        }

        try {
            api.defaults.headers.authorization = `Bearer ${token}`;
             const response = api.post("/users/techs", newTecnologia);
           console.log(response)
          } catch (error) {
            console.log(error);
          }
    }
    
    return (
        <ModalStyle >

            <section>

                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={closeModal}> X </button>
                </div>

                <form onSubmit={cadastrarTechs}>

                    <label> Nome
                        <input  type="text" onChange={(e) => setTecnologia(e.target.value)} placeholder="Adicione uma tecnologia"/>
                    </label>
                
                    <label> Selecionar Status      
                        <select onChange={(e) => setStatus(e.target.value)}>

                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário </option>
                            <option value="Avançado">Avançado </option>

                        </select>
                    </label>

                    <button type="submit" className="cadastrotech">Cadastrar Tecnologia</button>

                </form>

            </section>
        </ModalStyle>

    )
}