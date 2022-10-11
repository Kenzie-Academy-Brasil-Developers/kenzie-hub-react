import styled from "styled-components";

export const Headerstyle = styled.header`
        width: 100%;
        height: 150px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

    h1 {
        color: var(--color-primary)
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 32px;

        background: var(--gray-3);
        color: var(--gray-0);
        border-radius: 4px;
        font-weight: bold;

        transition: width 2s, height 2s, background-color 2s, transform 2s;
        cursor: pointer;
    }

    div:hover {
        background: var(--gray-1);
    }
`
