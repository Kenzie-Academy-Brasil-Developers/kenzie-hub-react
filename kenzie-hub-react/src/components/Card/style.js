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
    font-weight: 700;
    font-size: 14.21px;

    color: var(--gray-0);

    margin: 45px 25px;
}

span {

    font-weight: 400;
    font-size: 12.182px;
    
    color: var(--gray-1);

    margin: auto 15px;
}

img {
    width: 12px;
    height:16px;

    margin: auto 15px;

}

@media (min-width: 500px) {

    width: 90%;
}

`