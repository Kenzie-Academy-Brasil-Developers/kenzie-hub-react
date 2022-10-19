import styled from "styled-components";

export const ModalStyle = styled.section`
    position: absolute;
    display: flex;
    justify-content: center;

    top:0;
    left:0;

    width: 100%;
    height: 100%;

    background-color:  var(--container-modal);
    

    section {
        display:flex;
        flex-direction: column;
        align-items: center;
        
        background-color:  var(--gray-3);
        
        width: 369px;
        min-width: 169px;
        height: 342px;
        
        margin-top: 255px;
        
        box-shadow: 0px 4px 40px -10px  var(--container-modal);
        border-radius: 4px;
    }

    div {
        display:flex;

         width: 369px;
        height: 50px;

        
        background-color:  var(--gray-2);

        border-radius: 4px;

        h2 {
            color:  var(--gray-0);

            font-weight: 700;
            font-size: 14px;
            margin: auto  15px;
        }

        button {
        font-weight: 600;
        font-size: 16px;
        
        color: var(--gray-1);

        cursor: pointer;
        }
    }

    form {
        
        width: 90%;
        display:flex;
        flex-direction:column;
        
        align-items: center;
        
        margin: 10px;

        label {
            width: 100%;

            font-weight: 400;
            font-size: 12.182px;

            color: var(--gray-1);

            margin: 10px ;

            input {
                width: 100%;
                height: 48px;

                background-color: var(--gray-2);
                margin: 10px 0;

                border: 1.2182px solid var(--gray-0);
                border-radius: 4px;
            }
            
            input::placeholder {
                color: var(--gray-0);
                
            }

            select {
                width: 100%;
                height: 48px;

                color: var(--gray-0);
                background-color: var(--gray-2);
                margin: 15px 0;
                
                border: 1.2182px solid var(--gray-0);
                border-radius: 4px;

                cursor: pointer;
            }

        }
        .cadastrotech {
            height: 48px;
            width: 100%;

            font-weight: 500;
            font-size: 16px;

            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            cursor: pointer;
        }
    }
`