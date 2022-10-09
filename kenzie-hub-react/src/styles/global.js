import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

:root {
    --color-primary: #FF577F;
    --color-primary-50: #FF427F;
    --color-primary-disable: #59323F;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;
    --sucess: #3FE864;
    --error: #E83F5B;
}

* {
    paddin: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    border: none;
    box-sizing: border-box
}

.App {
    display: flex;
    flex-direction: column;
    align-items: center;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-4);
}
`