import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

import Card from "../Card"
import { ModalTechs } from "../ModalTechs"
import { ListStyle } from "./style"


const  CardList = ( ) => {

    const  [modal, setModal] = useState(false)
    
    function  openModal (){
        setModal(true)
    }

    function  closeModal (){
        setModal(false)
    }
 
    return (

        <ListStyle>
            <div>
                <h1>Tecnologias</h1>
                <button onClick={openModal} >  + </button>

            </div>
            
            <div className="lista">

            { modal ? <ModalTechs closeModal={closeModal} /> : <></> }
             
                <ul>
 

                </ul>
                
            </div>
        
        </ListStyle>
    )
}

export default CardList