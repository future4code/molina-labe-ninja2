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

const arrayCheckBox = ['Picpay', 'Pix', 'Credito', 'Boleto']

export default class MainCadastro extends React.Component {

  state = {
    inputTitle: '',
    inputPrice: '',
    inputDescription: '',
    inputPaymentMethods: [
    

    ],
    inputDueDate: ''

  }



  handleChangeCheck = ((event) => {
    if (event.target.checked) {
      this.setState({ inputPaymentMethods: [...this.state.inputPaymentMethods, event.target.value] })
    } else {
      this.setState(this.state.inputPaymentMethods.filter((checkbox) => {
        return checkbox !== event.target.value
      }))
    }
  })



  createJob = () => {
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
    } catch (err) {
      alert(err)
    }

  }

  

  render() {

    console.log(this.state.inputPaymentMethods)

    return (
      <MainContainer>
        <h4>
          Nome do Serviço
        </h4>
        <InputServico
          placeholder="Nome do serviço"
          value={this.state.inputTitle}
          onChange={e => this.setState({ inputTitle: e.target.value })}

        />
        <ContainerPagamento>
          <h4>Métodos de pagamento</h4>

          {arrayCheckBox.map((checkbox) => {
            return (
              <label key={checkbox}>
                <input
                  type='checkbox'
                />
                {checkbox}
              </label>

            )
          })
          }


          <h4>Valor</h4>
          <input
            placeholder="Valor"
            value={this.state.inputPrice}
            onChange={e => this.setState({ inputPrice: e.target.value })}

          />
        </ContainerPagamento>
        <h4>Prazo</h4>
        <InputDataEstilizado
          id="date"
          type="date"
          value={this.state.inputDueDate}
          onChange={e => this.setState({ inputDueDate: e.target.value })}
        />
        <h4>Descrição do serviço:</h4>
        <InputDescricao
          value={this.state.inputDescription}
          onChange={e => this.setState({ inputDescription: e.target.value })}
        />
        <BotaoOferecerServico  onClick={this.createJob}>Oferecer serviço!</BotaoOferecerServico>
        {/*Botão acima é sugestão de implementação*/}
      </MainContainer>
    )
  }
}