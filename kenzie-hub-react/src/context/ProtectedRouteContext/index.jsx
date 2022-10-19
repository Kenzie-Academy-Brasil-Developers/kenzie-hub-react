import { useContext } from "react"
import { Navigate  } from 'react-router-dom';
import { UserContext } from "../../context/UserContext"
import Dashboard from "../../page/Dashboard";

const ProtectedRouteContext = () => {
    const {user, loading} =  useContext(UserContext)


    if (loading) {
        return <p>carregandooooooooooooo</p>
        
    }
    return (
        <>
        {user?


        < Dashboard />
    :(

        <Navigate to='/' replace   />
    )
        }
        </>
    )
}

export default ProtectedRouteContext