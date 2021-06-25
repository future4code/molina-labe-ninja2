import React from 'react'
import { Container, Title, Description, Price, Span, Line, ContainerButton, ContainerPayments } from './styled'
import { FaMoneyCheckAlt } from "react-icons/fa";

export default class CardsServicos extends React.Component {
	render(){
		return(
			<Container>
        <Title>
          <h2>{this.props.titulo}</h2>
        </Title>
          <p>Prazo: {this.props.prazo}</p>
        <Description>
          <p>{this.props.description}</p>
        </Description>
        <Price>
          <p>R$ {this.props.preco},00</p>
          <ContainerButton>
            <ContainerPayments>
              {this.props.paymentMethods.map((method) => {
                return (
                  <p><Span color={'var(--purple-color)'}><FaMoneyCheckAlt/></Span>{method}</p>
                )
              })}
            </ContainerPayments>

            <div>
              <button onClick={this.props.onClickAdd}>Add ao carrinho</button>
            </div> 
          </ContainerButton>
        </Price>
        <Line/>
      </Container>
		)
	}
}
