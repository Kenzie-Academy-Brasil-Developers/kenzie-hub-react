import { useContext } from "react"
import { Navigate, useLocation  } from 'react-router-dom';
import { UserContext } from "../../context/UserContext"
import Dashboard from "../../page/Dashboard";

const ProtectedRouteContext = () => {
    const {user, loading} =  useContext(UserContext)

    
  const location = useLocation();

    if (loading) {
        return <p>carregandooooooooooooo</p>
        
    }
    return (
        <>
        {user?


        < Dashboard />
    :(

        <Navigate to='/' replace state={{ from: location }}  />
    )
        }
        </>
    )
}

export default ProtectedRouteContext