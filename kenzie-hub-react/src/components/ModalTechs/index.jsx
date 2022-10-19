import { ModalStyle } from "./style"

export const ModalTechs = () => {

    return (
        <ModalStyle>

            <section>

                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <button> X </button>
                </div>

                <form>

                    <label> Nome
                        <input  type="text" placeholder="digite uma tecnologia"/>
                    </label>
                
                    <label> Selecionar Status      
                        <select type="text" >

                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário </option>
                            <option value="Avançado">Avançado </option>

                        </select>
                    </label>

                    <button>Cadastrar Tecnologia</button>

                </form>

            </section>
        </ModalStyle>

    )
}