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
    inputPaymentMethods: [], 
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

  onChangeCheckbox = (e) => {
    this.setState({inputPaymentMethods: e.target.value})
  }
/* 
  createJob = () => {
    axios.post(baseURL, headers) 
    
    .then() 
    
    .catch()

  } */

  render() {

    console.log('Titulo', this.state.inputTitle, 'Preço', this.state.inputPrice, 'Descrição', this.state.inputDescription, 'Pagamento', this.state.inputPaymentMethods, 'prazo', this.state.inputDueDate)


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
          <h4>Métodos de pagamento</h4>
          <input 
          type='checkbox'
          value={this.state.inputPaymentMethods}
          onChange={this.onChangeCheckbox}
          />
          <label>Picpay</label>
          <input 
          type='checkbox'
          value={this.state.inputPaymentMethods}
          onChange={this.onChangeCheckbox}
          />
          <label>Pix</label>
          <input 
          type='checkbox'
          value={this.state.inputPaymentMethods}
          onChange={this.onChangeCheckbox}
          />
          <label>Crédito</label>
          <input 
          type='checkbox'
          value={this.state.inputPaymentMethods}
          onChange={this.onChangeCheckbox}
          />
          <label>Boleto</label>
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