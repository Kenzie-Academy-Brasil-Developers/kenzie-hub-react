import styled from "styled-components";

export const FormLoginStyle = styled.div`

    height: 570px;
    width: 90%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--gray-3);

    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h2 {
        color: var(--gray-0);
        margin: 50px;
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
            color: var(--gray-0);

            width: 100%;
            height: 48px;

            background: var(--gray-2);

            border: 1px solid var(--gray-2);
            border-radius: 4px;
        }

        input::placeholder {
            color: var(--gray-0);
            padding: 10px;
            font-weight: 400;
            font-size: 16px;
        }

        input:hover {
            border: 1.2182px solid #F8F9FA;
        }

        h6 {
            background-color: var(--color-primary-disable);
            color: var(--gray-0);
            
            font-size: 0.7rem;
            font-weight: bold;

            letter-spacing: 0.62em;
            text-align: center;

            border-radius: 4px;
        }
        
        button {
            height: 40px;
            font-weight: 500;
            font-size: 12px;
            font-weight: bold;

            color: var(--gray-0);
            background: var(--color-primary);
            border: 1px solid var(--color-primary);

            transition: width 1s, height 2s, background-color 1s, transform 2s;
            border-radius: 4px;

            margin 25px 0;
            cursor: pointer;
        }

        button:hover {
            background: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
        }

        span {
            font-weight: 600;
            font-size: 10px;
            letter-spacing: 0.42em;
            color: var(--gray-1);
            
            margin 10px auto;

        }

        .LinkRegister {
            display: flex;
            justify-content: center;
            width:100%;
            height: 40px;

            text-align: center;
            align-items: center;
            font-weight: 500;
            font-size: 12px;
            font-weight: bold;

            color: var(--gray-0);
            background-color var(--gray-1);
            border: 1px solid var(--gray-1);
            border-radius: 4px;

            cursor: pointer;
        }

        .LinkRegister:hover {
            background: var(--gray-2);
            border: 1px solid var(--gray-2);
        }
`