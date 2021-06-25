import React from "react"

import Botao from '../botao/Botao'

import {
  HeaderContainer,
  ButtonsContainer,
  TextContainer,
  ImageContainer,
  ContainerAglomerado
} from './styled'

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <ImageContainer title="Voltar a Home">
          <a href='/'><img src="https://trello-attachments.s3.amazonaws.com/60d212b05330d07730605142/268x299/d53f45f3d2783562a88d3c81024efedc/Logo_Header.png" alt="Logo da Labeninjas" /></a>
        </ImageContainer>
        <ContainerAglomerado>
          <TextContainer>
            <p>O TALENTO CERTO,<br /> NO MOMENTO CERTO!</p>
          </TextContainer>
          <ButtonsContainer>
            <Botao renderMainCadastro={this.props.renderMainCadastro} />
            <button title="Serviços" className="service" onClick={this.props.renderPageList}>Serviços</button>
          </ButtonsContainer>
        </ContainerAglomerado>
      </HeaderContainer>
    )
  }
}