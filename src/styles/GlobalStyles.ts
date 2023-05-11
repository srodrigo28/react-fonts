import { createGlobalStyle } from "styled-components";
import fonts from "google-fonts";

fonts.add({
    'Comme': ['700', '700italic']
})
  
export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comme', sans-serif;

    border: none;
    outline: none;
}

`;