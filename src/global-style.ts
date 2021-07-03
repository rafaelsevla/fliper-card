import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
  }
  #root {
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #E8EBF6;
  }
`;
