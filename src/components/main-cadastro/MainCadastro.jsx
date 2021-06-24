import React from 'react'
import api from '../../services/api'
/* import {baseURL, headers} from '../src/services/api'  */
import {
  InputDescricao,
  MainContainer,
  ContainerPagamento,
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

  

  onChangeCheckbox = (e) => {
    this.setState({inputPaymentMethods: e.target.value})
  }

    createJob = () =>{
      try {
        api.post('/jobs', {
          title: this.state.inputTitle,
          description: this.state.inputDescription,
          price: this.state.inputPrice,
          paymentMethods: [...this.state.inputPaymentMethods],
          dueDate: this.state.dueDate

        })
        alert('Serviço cadastrado com sucesso!')
        this.setState({
          inputTitle: '',
          inputPrice: '',
          inputDescription: '',
          inputPaymentMethods: [], 
          inputDueDate: ''

        })
      }catch(err){
        alert(err)
      }

      }
 
  

  render() {

    




    return (
      <MainContainer>
        <h4>
          Nome do Serviço
        </h4>
        <InputServico 
          placeholder="Nome do serviço"
          value={this.state.inputTitle}
          onChange={e => this.setState({inputTitle: e.target.value})}
        
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
            onChange={e => this.setState({inputPrice: e.target.value})}

          />
        </ContainerPagamento>
        <h4>Prazo</h4>
        <InputDataEstilizado 
        id="date" 
        type="date" 
        value={this.state.inputDueDate}
        onChange={e => this.setState({inputDueDate: e.target.value})}
        />
        <h4>Descrição do serviço:</h4>
        <InputDescricao 
          value={this.state.inputDescription}
          onChange={e => this.setState({inputDescription: e.target.value}) }
        />
        <BotaoOferecerServico /* onClick={this.createJob} */>Oferecer serviço!</BotaoOferecerServico>
        {/*Botão acima é sugestão de implementação*/}
      </MainContainer>
    )
  }
}