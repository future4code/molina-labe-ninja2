import { options } from 'colorette'
import React from 'react'
import { MainContainer } from './styled'

export default class ListaOrdenacao extends React.Component {
  
  render() {
    return (
      <MainContainer>
        <select 
          onChange={this.props.onChangeFiltroSelect}
          value={this.props.value}>
          <option value="" disabled>Selecionar</option>
          {this.props.options.map((option)=> 
          <option key={option} value={option}>{option}</option>
          )}
          {/* {<option onChange={this.props.onChangeFiltroSelect}>Título</option>
          <option onChange={this.props.onChangeFiltroSelect}>Valor remuneração</option>
          <option onChange={this.props.onChangeFiltroSelect}>Prazo</option> } */}
        </select>
      </MainContainer>
    )
  }
}