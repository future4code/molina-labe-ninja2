import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 78%;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  

  .ordenacao {
    display: flex;
    justify-content: flex-end;
    width: 90%;
  }

  @media only screen and (min-width: 992px){
    min-width: 686px;
  }
`

const ContainerCart = styled.div`
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  overflow: auto;

  h2 {
    font: var(--title-font);
    font-size: 1.2rem;
    align-self: flex-start;
    margin-left: 40px;
    margin-bottom: 10px;
  }

 
`

const Line = styled.hr`
  margin-bottom: 8%;
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
`

export { Container, CardList, ContainerCart, Line }