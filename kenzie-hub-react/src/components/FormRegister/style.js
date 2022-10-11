import styled from "styled-components";

export const FormRegisterStyle = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 90%;
        max-width: 500px;

       background-color: var(--gray-3);
       box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
       border-radius: 4px;

    h2 {
        color: var(--gray-0);

        font-weight: 700;
        font-size: 18px;
        margin: 50px;
    }     

    p {
        color: var(--gray-1);
        
        margin: 0 0 25px 0;
    }

    form {
        width: 90%;

        display: flex;
        flex-direction: column;

        label {
            color: var(--gray-0);

            font-weight: 400;
            font-size: 12.182px;
            margin: 25px 0 25px 5px;
        }

        input {
            width: 100%;
            height: 48px;

            background: var(--gray-2);

            border: 1px solid var(--gray-2);
            border-radius: 4px;
        }

        input::placeholder {
            color: var(--gray-1);
            padding: 10px;
            font-weight: 400;
            font-size: 16.2426px;
        }

        h6 {
            background-color: var(--color-primary-disable);
            color: var(--gray-0);
            
            font-size: 0.7rem;
            font-weight: bold;

            letter-spacing: 0.52em;
            text-align: center;

            border-radius: 4px;
        }

        select {
            width: 100%;
            height: 50px;

            padding: 10px;
            font-weight: 400;
            font-size: 16.2426px;
            
            color: var(--gray-1);
            background: var(--gray-2);
            border: 1px solid var(--gray-2);

            border-radius: 4px;
        }

        button {
            font-weight: 500;
            font-size: 16px;

            padding: 0px 22px;
            margin 20px 0;
            height: 48px;

            color: var(--gray-0);
            background: var(--color-primary-disable);

            border: 1px solid var(--color-primary-disable);
            transition: width 2s, height 2s, background-color 2s, transform 2s;
            border-radius: 4px;
            cursor: pointer;
        }
        
        button:hover {
            background: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
        }
    }
`
