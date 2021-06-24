import styled from 'styled-components'

const MainContainer = styled.div`
  border: 1px solid #494949;
  padding: 20px;
  height: 300px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #494949;

  input{
    padding: 3px;
  }
`

export  {MainContainer, ItemContainer}