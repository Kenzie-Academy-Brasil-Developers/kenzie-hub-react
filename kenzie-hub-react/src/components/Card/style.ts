import styled from "styled-components";

export const CardStyle = styled.li`

display: flex;
justify-content: space-around;

width: 87%;
background-color: var(--gray-4);
color: var(--gray-0);
border-radius: 4px;

margin:  15px 0 ;

p {
    min-width: 40%;
    font-weight: 700;
    font-size: 14.21px;

    color: var(--gray-0);

    margin: 45px 0px;
}

span {
    display: none;
}

img {
    width: 12px;
    height:16px;

    margin: auto 0;
    cursor: pointer;
    
}
img:hover {
    background-color: red;
    border-radius: 4px;
}

@media (min-width: 340px) {
   span{
    display: block ;
    font-weight: 400;
    font-size: 12.182px;
    
    color: var(--gray-1);

    margin: auto 15px; 
    } 
}
@media (min-width: 520px) {

    width: 90%;

    p {
        margin: 45px 10px;
    }

    span {
        font-weight: 400;
        font-size: 12.182px;
        
        color: var(--gray-1);
    
        margin: auto 15px; 
    }
}

`