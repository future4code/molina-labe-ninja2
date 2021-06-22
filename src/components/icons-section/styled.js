import styled from 'styled-components'

const Container = styled.div`
  padding: 10px 20px;
  max-width: 300px;

  span {
    font-size: 3rem;
    color: var(--purple-color);
  }

  h2 {
    font: var(--title-font);
    font-size: 1rem;
    color: var(--purple-color);
  }

  p {
    margin-top: 2%;
    font-size: 0.7rem;
  }
`

export { Container }