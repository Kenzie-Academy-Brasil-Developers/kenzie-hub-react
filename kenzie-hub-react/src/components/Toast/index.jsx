import ToastStyled from "./style";

const Toast = ({ fechaModal }) => {
  return (
    <ToastStyled>
      <h5>'</h5>

      <button onClick={fechaModal}>fechar</button>
    </ToastStyled>
  );
};
export default Toast;
