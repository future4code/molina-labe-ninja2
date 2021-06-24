import React from 'react'
import { Container, Title, Description, Price, Span } from './styled'
import { FaPaypal, FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";

export default class CardsServicos extends React.Component {
	render(){
		return(
			<Container>
        <Title>
          <h2>{this.props.titulo}</h2>
        </Title>
        <Description>
          <p>{this.props.descricao}</p>
        </Description>
        <Price>
          <p>{this.props.preco}</p>
          <div>
            <p><Span color={'blue'}><FaPaypal/></Span> PayPal</p>
            <p><Span color={'red'}><FaCreditCard/></Span> Cartão</p>
            <p><img src="https://i.imgur.com/XDuWV6C.png" alt="Pix" /> Pix</p>
            <p><Span color={'grey'}><FaFileInvoiceDollar/></Span> Boleto</p>
          </div>
        </Price>
      </Container>
		)
	}
}
