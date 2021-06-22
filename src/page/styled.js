import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  
`;

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    background-color: var(--white-color);
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  :root {
    --purple-color: #8166CB;
    --grey-color: #4B4B4B;
    --icons-color: #1D407F;

    --logo-font: 'Edo', sans-serif;
    --title-font: 700 36px 'Poppins', sans-serif;
  }
`;

export { Container, GlobalStyle }