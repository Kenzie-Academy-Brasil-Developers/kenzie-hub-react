import styled from "styled-components";

export const UserProfileStyle = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 131px;

    border-bottom: 1px solid var( --gray-3);

h1 {  
    width: 60%;
    min-width: 200px;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: var(--gray-0);

    margin: 40px auto 0 auto;
}

p {
    width: 50%;
    
    margin: 20px auto 10px auto;

    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    
    color: var(--gray-1)
}

@media (min-width: 500px) {
    flex-direction: row;

    justify-content: space-between;
    text-align: center;
    

    h1{
        margin: 50px 0;
    }

    p{
        margin-top: 55px ;
    }
}
`