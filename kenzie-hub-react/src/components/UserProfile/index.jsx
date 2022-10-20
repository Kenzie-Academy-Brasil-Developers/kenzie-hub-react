import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { UserProfileStyle } from "./style"

export const UserProfile = () => {

    const {user} =  useContext(UserContext)

    return (
        <UserProfileStyle>

            <h1>Olá, {user.data.name}</h1>
            <p>{user.data.course_module}</p>
        </UserProfileStyle>

    )
}