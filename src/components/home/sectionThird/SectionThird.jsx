import React from 'react'
import Botao from '../../botao/Botao'

import { ContainerGeral, TerceiraSecao, ContainerItem } from './styled'

class SectionThird extends React.Component {
  render() {
    return (
      <ContainerGeral>
        <h2>Como a LabeNinjas pode te ajudar?</h2>
        <TerceiraSecao>
          <ContainerItem>
            <div>
              <img src='' alt='imagem de pessoas'></img>
            </div>

            <h4>Encontre o freelancer perfeito</h4>
            <p>
              É a sua primeira vez na LabeNinjas? Publique um trabalho e tenha
              acesso as propostas dos freelancers para por suas ideias para trabalhar.
            </p>
            <Botao />
          </ContainerItem>

          <ContainerItem>
            <div>
              <img src='' alt='imagem de pessoas'></img>
            </div>
            <h4>Comece a trabalhar como freelancer</h4>
            <p>
              Voce é freelancer? Na LabeNinjas voce pode escolher entre centenas de
              projetos para trabalhar desde qualquer lugar.
            </p>
            <Botao />
          </ContainerItem>
        </TerceiraSecao>
      </ContainerGeral>
    )
  }
}

export default SectionThird
