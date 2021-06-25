import styled from 'styled-components'

const Container = styled.div`
  min-width: 80%;
  width: 25vw;
  padding: 10px;
  margin: 0 60px;
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

const Line = styled.hr`
  margin-bottom: 2%;
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
`

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    color: white;
    background-color: #40CD28;
    padding: 10px 20px;
    width: 160px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      opacity: 1;
      box-shadow: 2px 2px 5px rgba(64, 205, 40, 0.6);
    }
  }
`

const ContainerPayments = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;

  .payment {
    display: flex;
    gap: 5px;
  }
`

export { Container, Title, Description, Price, Span, Line, ContainerButton, ContainerPayments }