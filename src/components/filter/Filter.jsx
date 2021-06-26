import React from 'react'
import { FiFilter } from 'react-icons/fi'

import { MainContainer, ItemContainer, Line } from './styled'

export default class Filter extends React.Component {
  render() {
    return (
      <MainContainer>
        <h2><span><FiFilter /></span> Filtro</h2>
        <Line />
        <div className='filter'>
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
              placeholder=''
              type="text"
              min='0'
              value={this.props.minFilter}
              onChange={this.props.onChangeMinFilter}
            />
          </ItemContainer>
          <ItemContainer>
            <label>Valor máximo</label>
            <input
              placeholder=''
              type="text"
              min='0'
              value={this.props.maxFilter}
              onChange={this.props.onChangeMaxFilter} />
          </ItemContainer>
        </div>
      </MainContainer>
    )
  }
}