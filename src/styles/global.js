import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/teste.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  ::-webkit-scrollbar {
    width: 13px;
    background: #fff;
  }
  
  ::-webkit-scrollbar-thumb {
      /* -webkit-border-radius: 8px; */
      /* border-radius: 2px; */
      background: #777; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;  
    box-sizing: border-box;
  }

  body {
    background: #7159c1 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
