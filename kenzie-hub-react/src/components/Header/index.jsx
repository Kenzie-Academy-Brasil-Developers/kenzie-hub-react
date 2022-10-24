import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Headerstyle } from "./style";

const Header = () => {
  const {logout} =  useContext(UserContext)

  return (
    <Headerstyle>
      <h1>Kenzie Hub</h1>

      <Link to="/">
        <div onClick={logout}>Sair</div>
      </Link>
    </Headerstyle>
  );
};

export default Header;
