import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  width: 100%;
  padding: 30px;
`

const ImageContainer = styled.div`
  display: flex;
  width: 170px;

  img {
    width: 100%;
  }
`

const ContainerAglomerado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TextContainer = styled.div`

  p {
    font-family: "Edo", sans-serif;
    color: var(--purple-color);
    font-size: 54px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  .service {
    font-size: 1rem;
    width: 160px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid var(--purple-color);
    color: var(--purple-color);
    background-color: white;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
      box-shadow: 2px 2px var(--purple-color);
    }
  }
`

export { 
  HeaderContainer,
  ButtonsContainer,
  TextContainer,
  ImageContainer,
  ContainerAglomerado
}