import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

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
    --title-font: 700 'Poppins', sans-serif;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
`;

const Line = styled.hr`
  width: 80%;
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`

export { Container, GlobalStyle, Line }