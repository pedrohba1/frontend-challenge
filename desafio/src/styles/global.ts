import { createGlobalStyle } from 'styled-components';

// #FFD300
// #202020

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,800&display=swap');
*{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #202020;
        -webkit-font-smoothing: anti-aliased;
        font: 14px, Roboto ,sans-serif;
    }
    body,input, button {
        color: #fff;
        font: 14px, Roboto ,sans-serif;
    }
    #root{
        margin: 20px;
        padding: 0, 20px, 50px;
    }
    button{
        cursor: pointer;
    }
`;
