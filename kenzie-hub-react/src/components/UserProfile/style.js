import styled from "styled-components";

export const UserProfileStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   text-align: center;
    width: 100%;

    border-bottom: 1px solid var( --gray-3);

h1 {  
    width: 80%;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: var(--gray-0);

    margin: 30px auto 0 auto;
}

p {
    width: 40%;
    
    margin: 20px auto 10px auto;

    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    
    color: var(--gray-1)
}
@media (min-width: 300px){
    text-align: unset;
    h1 {
        width: 100%;
        margin: 30px auto 0 25%;
    }

    p {
        width: 60%;
        margin: 20px auto 10px 40%;
    }
}
@media (min-width: 390px){
    h1 {
        margin: 30px auto 0 30%;
    }
}

@media (min-width: 520px) {

    width: 70%;
    max-width: 600px;
    flex-direction: row;

    h1{
        width: 120%;
        margin: 50px 2% 50px 0;
    }

    p{
        margin: 55px 0 auto 20%;
    }
}


@media (min-width: 705px) {
    h1 {
        margin: 50px 20% 50px 0;
    
}
`