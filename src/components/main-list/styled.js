import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 160px 40px;
  border: 1px solid red;
`

const CardList = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerCart = styled.div`
  max-width: 450px;
  height: 200px;
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

export { Container, CardList, ContainerCart }