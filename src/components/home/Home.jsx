import React from 'react';
import { FaMobileAlt } from "react-icons/fa"
import Botao from '../botao/Botao'
import {
    ContainerGeralSectionFirst,
    ContainerSectionFirst,
    TituloSectionFirst,
    StepSectionFirst,
    ContainerSectionSecond,
    ContainerGeralSectionThird,
    TerceiraSecao
} from './styled'



export default class Home extends React.Component {
  render() {
    return (
      <div>
         <ContainerGeralSectionFirst>
        <div>
          <TituloSectionFirst>Como funciona?</TituloSectionFirst>
          <ContainerSectionFirst>
            <StepSectionFirst>
              <h4>Publicar</h4>
              <p>
                Conte-nos em poucas palavras o que você precisa. É
                grátis e sem compromisso!
              </p>
            </StepSectionFirst>
            <StepSectionFirst>
              <h4>Selecionar</h4>
              <p>
                Receba propostas de excelentes freelancers.
                Escolha o melhor para o seu projeto.
              </p>
            </StepSectionFirst>
            <StepSectionFirst>
              <h4>Começar</h4>
              <p>
                Você faz o pagamento com total garantia sobre
                o valor depositado e já começa a trabalhar
              </p>
            </StepSectionFirst>
            <StepSectionFirst>
              <h4>Aceitar</h4>
              <p>
                Receba o projeto concluído e libere o
                valor depositado ao freelancer.
              </p>
            </StepSectionFirst>
          </ContainerSectionFirst>
          <div>
            <Botao renderMainCadastro={this.props.renderMainCadastro}/>
          </div>
        </div>
      </ContainerGeralSectionFirst>
      <ContainerSectionSecond>
        <h3>É muito fácil colocar em prática as suas idéias hoje</h3>
        <div>
          <span><FaMobileAlt/></span>
          <h2>Lance seu App Mobile</h2>
          <p>Alcance seus clientes em qualquer lugar atráves de um App.</p>
        </div>
      </ContainerSectionSecond>
      <ContainerGeralSectionThird>
        <h2>Como a LabeNinjas pode te ajudar?</h2>
        <TerceiraSecao>
          <div>
            <div>
              <img src='' alt='imagem de pessoas'></img>
            </div>

            <h4>Encontre o freelancer perfeito</h4>
            <p>
              É a sua primeira vez na LabeNinjas? Publique um trabalho e tenha
              acesso as propostas dos freelancers para por suas ideias para trabalhar.
            </p>
            <Botao
              renderMainCadastro={this.props.renderMainCadastro}
            />
          </div>

          <div>
            <div>
              <img src='' alt='imagem de pessoas'></img>
            </div>
            <h4>Comece a trabalhar como freelancer</h4>
            <p>
              Voce é freelancer? Na LabeNinjas voce pode escolher entre centenas de
              projetos para trabalhar desde qualquer lugar.
            </p>
            <Botao
              renderMainCadastro={this.props.renderMainCadastro}
            />
          </div>
        </TerceiraSecao>
      </ContainerGeralSectionThird>
      </div>
    )
  }
}