import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.svg';

// #FFD300
// #202020

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
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
        max-width: 1020px;
        margin: auto;
        padding: 0, 20px, 50px;
    }
    button{
        cursor: pointer;
    }
`;
