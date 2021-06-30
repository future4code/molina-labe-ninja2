import React from 'react'
import { Container, Title, Description, Price, Span, Line, ContainerButton, ContainerPayments } from './styled'
import { FaMoneyCheckAlt } from "react-icons/fa";

export default class CardsServicos extends React.Component {
	render() {
		return (
			<Container>
        <Title>
          <h2>{this.props.titulo}</h2>
        </Title>
          <p>Prazo: {this.props.prazo}</p>
        <Description>
          <p>{this.props.descricao}</p>
        </Description>
        <Price>
          <p>R$ {this.props.preco},00</p>
          <ContainerButton>
            <ContainerPayments>
              {this.props.paymentMethods.map((method) => {
                return (
                  <div className="payment" key={method}>
                    <Span color={'var(--purple-color)'}><FaMoneyCheckAlt/></Span>
                    <p>{method}</p>
                  </div>
                )
              })}
            </ContainerPayments>

            <div>
              <button title="Adionar o serviço ao carrinho" onClick={this.props.onClickAdd}>Contratar</button>
            </div> 
          </ContainerButton>
        </Price>
        <Line/>
      </Container>
		)
	}
}
