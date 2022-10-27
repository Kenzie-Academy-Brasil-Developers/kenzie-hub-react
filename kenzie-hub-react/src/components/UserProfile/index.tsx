import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { UserProfileStyle } from "./style"

export const UserProfile = () => {

    const {user}: any =  useContext(UserContext)

    return (
        <UserProfileStyle>

            <h1>Olá, {user.name}</h1>
            <p>{user.course_module}</p>
        </UserProfileStyle>

    )
}