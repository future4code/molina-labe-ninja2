import styled from "styled-components"


const ContainerGeralSectionFirst = styled.div`
    padding: 0 100px;
`

const ContainerSectionFirst = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const TituloSectionFirst = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #4B4B4B;
   
`

const StepSectionFirst = styled.div`
    h4 {
        font-size: 14px;
         margin-bottom: 10px;
    }
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #4B4B4B;
    margin-right: 10px;
`

const BotaoPublicar = styled.button`
    background-color: #59C156;
    font-size: 8px;
    border-radius: 20px;
    color: white;
`

const ContainerSectionSecond = styled.div`
  h3 {
    font: var(--title-font);
    font-size: 1.3rem;
    margin-left: 20px;
  }

  > div {
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
  }
`
const ContainerGeralSectionThird = styled.section`
  padding: 40px 100px;
  h2{
    margin-bottom: 20px;
  }
`

const TerceiraSecao = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    margin-bottom: 10px;
  }

  h4{
    margin-bottom: 10px;
  }

  p{
    width: 540px;
    margin-bottom: 20px;
  }
`



export {
    ContainerGeralSectionFirst,
    ContainerSectionFirst,
    TituloSectionFirst,
    StepSectionFirst,
    ContainerSectionSecond,
    ContainerGeralSectionThird,
    TerceiraSecao
}