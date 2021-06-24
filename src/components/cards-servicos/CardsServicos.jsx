import React from 'react'
import { Container, Title, Description, Price, Span, Line } from './styled'
import { FaMoneyCheckAlt } from "react-icons/fa";

export default class CardsServicos extends React.Component {
	render(){
		return(
			<Container>
        <Title>
          <h2>{this.props.service}</h2>
        </Title>
          <p>Prazo: {this.props.date}</p>
        <Description>
          <p>{this.props.description}</p>
        </Description>
        <Price>
          <p>R$ {this.props.price},00</p>
          <div>
            {this.props.paymentMethods.map((method) => {
              return (
                <p><Span color={'var(--purple-color)'}><FaMoneyCheckAlt/></Span>{method}</p>
              )
            })}
          </div>
        </Price>
        <Line/>
      </Container>
		)
	}
}
