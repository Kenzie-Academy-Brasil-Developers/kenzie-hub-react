import lixo from "../../assets/lixo.png"; 
import { CardStyle } from "./style"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Card = () => {
  
  const {user} =  useContext(UserContext)
  return (

    <CardStyle>
      <p>{user.techs.name}</p>
      <span>{user.techs.nivel}</span>
      <img src={lixo} alt={`imagem perfil de ${user.techs.name}`}></img>
      
    </CardStyle>
  )
}
  
export default Card;
