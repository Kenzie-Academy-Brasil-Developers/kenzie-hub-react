import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

import Card from "../Card"
import { ModalTechs } from "../ModalTechs"
import { ListStyle } from "./style"

const  CardList = ( ) => {

    const  [ techs, setTechs] = useState([])
    
    function  ModalAdd (){
        //setar novo  estado para  array  techs. que  esta renderizando um  card para cada item na lista
        // fazer tudo dentro de um useEfect para ficar olhando a montagem edesmontagem do estado array  techs
        console.log(<ModalTechs />)
    }

    const {user} =  useContext(UserContext)
 
    return (

        <ListStyle>
            <div>
                <h1>Tecnologias</h1>
                <button onClick={ModalAdd}>  + </button>

            </div>
            
            <div className="lista">

                <ul>
                

                   
               

                </ul>
                
            </div>
        
        </ListStyle>
    )
}

export default CardList