import React from 'react'
import { Container, Title, Description, Price, Span, Line } from './styled'
import { FaPaypal, FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";

export default class CardsServicos extends React.Component {
	render(){
		return(
			<Container>
        <Title>
          <h2>Cortar a grama</h2>
          <p>Publicado: 30/11/2021</p>
        </Title>
        <Description>
          <h3>Descrição do projeto</h3>
          <p>Manutenção em áreas verdes de até 1000 metros quadrados.</p>
        </Description>
        <Price>
          <p>Valor: R$ 40,00</p>
          <div>
            <p><Span color={'blue'}><FaPaypal/></Span> PayPal</p>
            <p><Span color={'red'}><FaCreditCard/></Span> Cartão</p>
            <p><img src="https://i.imgur.com/XDuWV6C.png" alt="Pix" /> Pix</p>
            <p><Span color={'grey'}><FaFileInvoiceDollar/></Span> Boleto</p>
          </div>
        </Price>
        <Line/>
      </Container>
		)
	}
}
