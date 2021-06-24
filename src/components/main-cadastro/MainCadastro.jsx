import React from 'react'
import axios from 'axios'
/* import {baseURL, headers} from '../src/services/api'  */
import {
  InputDescricao,
  MainContainer,
  ContainerPagamento,
  SelectEstilizado,
  InputServico,
  BotaoOferecerServico,
  InputDataEstilizado
} from './styled'

export default class MainCadastro extends React.Component {

  state = {
    inputTitle: '',
    inputPrice: '',
    inputDescription: '',
    /* inputPaymentMethods: [], */ //Pesquisar como colocar no value do select
    inputDueDate: ''
  }

  

  onChangeInputServico = (e) => {
    this.setState({inputTitle: e.target.value})

  }

  onChangeInputValor = (e) => {
    this.setState({inputPrice: e.target.value})
  }

  onChangeInputDescricao = (e) => {
    this.setState({inputDescription: e.target.value})
  }

  onChangePrazo = (e) => {
    this.setState({inputDueDate: e.target.value})
  }
/* 
  createJob = () => {
    axios.post(baseURL, headers) 
    
    .then() 
    
    .catch()

  } */

  render() {


    return (
      <MainContainer>
        <h4>
          Nome do Serviço
        </h4>
        <InputServico 
          placeholder="Nome do serviço"
          value={this.state.inputTitle}
          onChange={this.onChangeInputServico}
        
        />
        <ContainerPagamento>
          <h4>Método de pagamento</h4>
          <SelectEstilizado>
            <option>Picpay</option>
            <option>PIX</option>
            <option>Crédito</option>
            <option>Boleto</option>
          </SelectEstilizado>
          <h4>Valor</h4>
          <input 
            placeholder="Valor" 
            value={this.state.inputPrice}
            onChange={this.onChangeInputValor}

          />
        </ContainerPagamento>
        <h4>Prazo</h4>
        <InputDataEstilizado 
        id="date" 
        type="date" 
        value={this.state.inputDueDate}
        onChange={this.onChangePrazo}
        />
        <h4>Descrição do serviço:</h4>
        <InputDescricao 
          value={this.state.inputDescription}
          onChange={this.onChangeInputDescricao}
        />
        <BotaoOferecerServico>Oferecer serviço!</BotaoOferecerServico>
        {/*Botão acima é sugestão de implementação*/}
      </MainContainer>
    )
  }
}