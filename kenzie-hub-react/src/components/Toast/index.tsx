import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ToastStyled from "./style";

const Toast = () => {
  const { fechaModal, messageToast }: any = useContext(UserContext);

  return (
    <ToastStyled>
      <div className="toast">
        <h5>{messageToast}</h5>

        <button className="btnToast" onClick={fechaModal}>
          X
        </button>
      </div>
    </ToastStyled>
  );
};
export default Toast;
