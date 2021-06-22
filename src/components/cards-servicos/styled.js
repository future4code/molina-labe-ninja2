import styled from 'styled-components'

const Container = styled.div`
  max-width: 50vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2%;
`

const Title = styled.div`
  margin-bottom: 2%;

  h2 {
    font: var(--title-font);
    font-size: 2rem;
  }

  p {
    font-size: 0.7rem;
    font-style: italic;
  }
`

const Description = styled.div`
  margin-bottom: 2%;

  h3 {
    font: var(--title-font);
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
`

const Price = styled.div`
  margin-bottom: 2%;

  p {
    font-size: 0.9rem;
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 1%;

    p {
      margin-right: 1%;
      font-size: 0.9rem;
    }

    img {
      height: 15px;
    }
  }

`

const Span = styled.span`
  color: ${(props) => props.color};
`

export { Container, Title, Description, Price, Span }