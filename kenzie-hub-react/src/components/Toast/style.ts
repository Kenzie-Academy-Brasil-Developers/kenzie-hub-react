import styled from "styled-components";

const ToastStyled = styled.div`
  display: flex;
  position: fixed;
  justify-content: flex-end;

  top: 5%;

  width: 100%;
  height: 100%;

  .toast {
    display: flex;
    width: 250px;
    height: 80px;

    text-align: center;
    
    background-color: var(--gray-2);
    border-radius: 4px;

    h5 {
      width: 90%;

      font-weight: 700;
      font-size: 14px;

      color: var(--gray-0);
      margin:  10px;
    }

    .btnToast {
      width: 20px;
      heigth: 10px;

      background-color: var(--gray-2);
      color: var(--gray-1);
      margin : 0 5px 40px 0;

      cursor: pointer;
    }
  }
`;
export default ToastStyled;
