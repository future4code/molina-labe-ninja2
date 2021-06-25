import React from 'react';
import { FaMobileAlt, FaFirstdraft, FaRegPlusSquare } from "react-icons/fa"
import { MdWeb } from "react-icons/md"
import { RiDraftLine, RiRouteLine } from "react-icons/ri"

import Botao from '../botao/Botao'

import {
  ContainerGeralSectionFirst,
  ContainerSectionFirst,
  TituloSectionFirst,
  StepSectionFirst,
  ContainerSectionSecond,
  SectionSecond,
  ContainerGeralSectionThird,
  TerceiraSecao
} from './styled'

export default class Home extends React.Component {
  render() {
    return (
      <>
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
            <Botao renderMainCadastro={this.props.renderMainCadastro} />
          </div>
        </ContainerGeralSectionFirst>
        <ContainerSectionSecond>
          <div className="titleSecond">
            <h3>Fácil  de colocar suas idéias em prática hoje</h3>
          </div>
          <SectionSecond>
            <div>
              <span><MdWeb /></span>
              <h2>Renovar seu site</h2>
              <p>Atualize seu site e o converta em uma máquina de vendas.</p>
            </div>
            <div>
              <span><FaMobileAlt /></span>
              <h2>Lance seu App Mobile</h2>
              <p>Alcance seus clientes em qualquer lugar atráves de um App.</p>
            </div>
            <div>
              <span><FaFirstdraft /></span>
              <h2>Designers Experts</h2>
              <p>Design Web, Gráfico ou Mobile. Tudo o que você precisa para acompanhar sua marca.</p>
            </div>
            <div>
              <span><RiDraftLine /></span>
              <h2>Editores e Tradutores</h2>
              <p>O conteúdo vende e você pode traduzi-lo para alcançar mais mercados.</p>
            </div>
            <div>
              <span><RiRouteLine /></span>
              <h2>Marketing e vendas</h2>
              <p>Freelancers que irão ajudá-lo a vender nas redes sociais, anunciar mais barato e vender mais.</p>
            </div>
            <div>
              <span><FaRegPlusSquare /></span>
              <h2>E muito mais!</h2>
              <p>Assessoria em negócios e financeira, jurídica, administrativa, etc.</p>
            </div>
          </SectionSecond>
        </ContainerSectionSecond>
        <ContainerGeralSectionThird>
          <div className="titleThird">
            <h2>Como a <span>LabeNinjas</span> pode te ajudar?</h2>
          </div>
          <TerceiraSecao>
            <div className="imageThird">
              <img src='https://i.imgur.com/zjXqzUZ.jpeg' alt='imagem de pessoas'></img>
            </div>

            <div className="containerThird">
              <h4>Encontre o serviço que precise</h4>
              <p>
                É a sua primeira vez na <span>LabeNinjas</span>? Publique um serviço e tenha
                acesso as propostas dos freelancers para por suas ideias para trabalhar.
              </p>
              <Botao
                renderMainCadastro={this.props.renderMainCadastro}
              />
            </div>
          </TerceiraSecao>
        </ContainerGeralSectionThird>
      </>
    )
  }
}