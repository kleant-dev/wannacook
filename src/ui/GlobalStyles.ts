import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{

    --primary-color: #f08c00;
    --secondary-color: #f59f00;
    --grey-color:#495057;
    --background-color:#f8f9fa;
}

body {
    font-size: 62.5%;
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family:"Inter",sans-serif
}
html {
    font-size: 62.5%;
}`;

export default GlobalStyle;
