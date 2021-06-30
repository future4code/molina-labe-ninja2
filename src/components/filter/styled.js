import styled from 'styled-components'

const MainContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  h2 {
    font: var(--title-font);
    font-size: 1.2rem;
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .filter {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`

const Line = styled.hr`
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #494949;

  input{
    padding: 3px;
  }
`

export  { MainContainer, ItemContainer, Line }