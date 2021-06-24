import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 160px;
  border: 1px solid red;
`

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`

export { Container, CardList }