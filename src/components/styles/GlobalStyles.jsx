import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
//Josh's Custom CSS Reset: https://www.joshwcomeau.com/css/custom-css-reset/
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }

  :root{
    font-size: 62.5%;
    --bg-dark: #151515;
    --text-dark: #949495;
    --text-white: #fff;
  }
  html, body {
    height: 100%;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  #root, #__next {
    isolation: isolate;
  }

  .flex-20{
    display: flex;
    gap: 20px;
  }
  .flex{
    display: flex;
  }
  .flex-20-column{
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .flex-start{
    align-items: start;
    justify-content: start;
  }
  .flex-center{
    align-items: start;
    justify-content: start;
  }
  .jc-sb{
    justify-content: space-between;
  }
  .ai-c{
    align-items: center;
  }
  .text-white{
    color: var(--text-white);
  }
  .g-30{
    gap: 30px;
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--text-white); 
  }
`;

export default GlobalStyle;
