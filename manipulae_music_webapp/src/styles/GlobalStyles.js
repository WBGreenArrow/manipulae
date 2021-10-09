import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        

    }

    html{
        font-size:62.5%;
       
    }

    body{ 

        font-family: "Opens Sans", sans-serif;
    }

    @media (max-width: 971px) {
    html {
        font-size: 50%;
    }
}

`;

export default GlobalStyles;
