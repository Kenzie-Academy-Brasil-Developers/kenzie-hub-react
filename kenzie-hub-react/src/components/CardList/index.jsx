import api from "../../services"
import Card from "../Card"

const  CardList = ( data ) => {
  
    const token = localStorage.getItem("@kenziehub:token")
    
    api.get("/profile", {
        headers: {
                Authorization: `Bearer ${token}`
                }
    })
    .then(response => {
        console.log(response)
    })
    .catch(erro => {
        console.log(erro)
    });
    return (
        <ul>

            <Card />
        </ul>
    )
}

export default CardList