import styled from "styled-components";

export const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-width: 100px;

    color: var(--gray-0);
    background-color: var(--gray-4);

    padding: 15px 0;

    div {
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        padding: 15px 0;

        max-width: 596px;
      

        h1 {
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
        }

        button  {
            font-size: 1.2rem;
            background-color: var(--gray-2);
            border-radius: 4px;
            color: var(--gray-0);

            margin: 0 5px;
            cursor: pointer;
        }
    }

    .lista  
        width: 100%;
        
        border-radius: 4px;
        
    }
        
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        background-color: var(--gray-2);

        padding: 0;
        border-radius: 4px;
    }
`;
