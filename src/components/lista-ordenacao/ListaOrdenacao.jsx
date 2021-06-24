import React from 'react'
import { MainContainer, MainCadastro } from './styled'

export default class ListaOrdenacao extends React.Component {
  
  // state = {
  //   titulo = "",
  //   valor = "",
  //   prazo= ""
  // }

  // onChangeValor = (event) => {
  //   this.setState ({
  //     valor: event.target.value
  //   })
  // }

  // onChangeTitulo = (event) => {
  //   this.setState ({
  //     titulo: event.target.value
  //   })
  // }

  // onChangePrazo = (event) => {
  //   this.setState ({
  //     prazo: event.target.value
  //   })
  // }

  // ordenaValor = () => {
  //   if (this.state.valor === pay)
  //     return valor.sort((a, b)=> a.preco - b.preco)
  // }
  
  render() {
    return (
      <MainContainer>
        <select>
          <option value="title">Título</option>
          <option value="pay">Valor remuneração</option>
          <option value="deadline">Prazo</option>
        </select>
      </MainContainer>
    )
  }
}