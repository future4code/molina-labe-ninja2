import React from 'react'
import { MainContainer } from './styled'

export default class ListaOrdenacao extends React.Component {
  render() {
    return (
      <MainContainer>
        <select
          onChange={this.props.onChangeFiltroSelect}
          value={this.props.value}
        >
          <option value="" disabled>Selecionar</option>
          {this.props.options.map((option) =>
            <option key={option} value={option}>{option}</option>
          )}
        </select>
      </MainContainer>
    )
  }
}