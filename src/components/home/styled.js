import styled from "styled-components"

const ContainerGeralSectionFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78%;
  margin-bottom: 20px;

  > div {

    button {
      margin-left: 10px;
    }
  }
`

const TituloSectionFirst = styled.p`
  font: var(--title-font);
  font-size: 1.5rem;   
`

const ContainerSectionFirst = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;
`

const StepSectionFirst = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  color: #4B4B4B;
  gap: 5px;

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--purple-color);
  }
`

const ContainerSectionSecond = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #F0F0F0;

  .titleSecond {
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;

    h3 {
      font: var(--title-font);
      font-size: 1.5rem;
    }
  }
`

const SectionSecond = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  width: 60%;

  > div {
    padding: 10px 20px;
    max-width: 300px;

    span {
      font-size: 3rem;
      color: var(--purple-color);
    }

    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--purple-color);
    }

    p {
      margin-top: 2%;
      font-size: 0.7rem;
    }
  }
`

const ContainerGeralSectionThird = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .titleThird {
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;

    h2 {
      font: var(--title-font);
      font-size: 1.5rem;

      span {
        font-family: "Edo", sans-serif;
        color: var(--purple-color);
      }
    }
  }
`

const TerceiraSecao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .imageThird {
    width: 70%;

    img {
      width: 100%;
    }
  }

  .containerThird {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    
    h4 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--purple-color);
    }

    p {
      font-size: 1rem;

      span {
        font-family: "Edo", sans-serif;
        color: var(--purple-color);
      }
    }
  }
`

export {
  ContainerGeralSectionFirst,
  ContainerSectionFirst,
  TituloSectionFirst,
  StepSectionFirst,
  ContainerSectionSecond,
  SectionSecond,
  ContainerGeralSectionThird,
  TerceiraSecao
}