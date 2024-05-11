import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{

    --primary-color: #fcc419;
    --secondary-color:#ffd43b;
    --grey-color:#495057;
    --background-color:#f8f9fa;
}

body {
    font-size: 1.6rem;
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family:"Inter",sans-serif
}
html {
    font-size: 62.5%;
}`;

export default GlobalStyle;
