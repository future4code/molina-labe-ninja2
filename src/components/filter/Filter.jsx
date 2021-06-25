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
          <input 
          placeholder='0'
          type="text"
          min='0'
          value={this.props.minFilter}
          onChange={this.props.onChangeMinFilter}
          />
        </ItemContainer>
        <ItemContainer>
          <label>Valor máximo</label>
          <input 
          placeholder='0'
          type="text"
          min='0'
          value={this.props.maxFilter}
          onChange={this.props.onChangeMaxFilter} />
        </ItemContainer>
      </MainContainer>
    )
  }
}