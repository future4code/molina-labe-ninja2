import React from 'react'
import { MainContainer, ItemContainer } from './styled'

export default class Filter extends React.Component {
  render() {
    return (
      <MainContainer>
        <ItemContainer>
          <input 
            type="text"
            placeholder='Pesquisar serviço' 
            value={this.props.value}
            onChange={this.props.onChangePesquisar}
          />
        </ItemContainer>
        <ItemContainer>
          <label>Valor mínimo</label>
          <input type="number" />
        </ItemContainer>
        <ItemContainer>
          <label>Valor máximo</label>
          <input type="number" />
        </ItemContainer>
      </MainContainer>
    )
  }
}