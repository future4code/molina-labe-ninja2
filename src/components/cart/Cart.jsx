import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Main, Price, Button, Line } from './styled'

export default class Cart extends React.Component {
  render() {
    return (
      <>
        <Main key={this.props.id}>
          <div>
            <h4>{this.props.title}</h4>
          </div>
          <Price>R$ {this.props.price},00</Price>
          <Button onClick={this.props.onClickDelete}><FaTrash/></Button>
        </Main>
        <Line/>
      </>
    )
  }

}