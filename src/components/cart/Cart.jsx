import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Main, Price, Button, Line } from './styled'

export default class Cart extends React.Component {
  render() {
    return (
      <>
        <Main>
          <p><span>x</span>0</p>
          <div>
            <p><span>Serviço:</span> Desenvolvimento de software baseado em capturas de tela/pixel</p>
          </div>
          <Price>R$ 00,00</Price>
          <Button><FaTrash/></Button>
        </Main>
        <Line/>
      </>
    )
  }

}