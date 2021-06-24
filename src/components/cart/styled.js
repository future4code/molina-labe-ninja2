import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin-bottom: 2%;
  align-items: center;

  p {
    font-size: 0.7rem;
  }

  span {
    font-size: 0.8rem;
  }

  > div {
    width: 70%;
    margin-left: 3%;
  }
`

const Price = styled.p`
  font-weight: bold;
`

const Button = styled.button`
  border:none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: red;
  padding: 0.8% 1.3%;
  border-radius: 20%;
`

const Line = styled.hr`
  margin-bottom: 2%;
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 80%;
`

export { Main, Price, Button, Line }