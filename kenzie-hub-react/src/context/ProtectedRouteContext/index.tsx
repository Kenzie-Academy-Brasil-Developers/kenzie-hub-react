import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Dashboard from "../../page/Dashboard";

const ProtectedRouteContext = () => {

  const { user, loading }: any = useContext(UserContext);

  if (loading) {
    return <p>carregandooooooooooooo</p>;
  }

  return user ?( <Dashboard />) :( <Navigate to="/" replace  />)
};

export default ProtectedRouteContext;
