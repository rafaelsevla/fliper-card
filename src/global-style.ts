import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #3B5CB8;
  }
  a {
    text-decoration: none;
  }
  #root {
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #E8EBF6;
  }
`;
