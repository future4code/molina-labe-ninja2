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
/* 
const arrayCheckBox = ['Picpay', 'Pix', 'Credito', 'Boleto'] */

export default class MainCadastro extends React.Component {

  state = {
    inputTitle: '',
    inputPrice: '',
    inputDescription: '',
    inputPaymentMethods: [
      { pagamento: 'Paypal', isChecked: false },
      { pagamento: 'Pix', isChecked: false },
      { pagamento: 'Credito', isChecked: false },
      { pagamento: 'Boleto', isChecked: false }
    ],
    inputDueDate: ''

  }



  /* handleChangeCheck = ((event) => {
    if (event.target.checked) {
      this.setState({ inputPaymentMethods: [...this.state.inputPaymentMethods, event.target.value] })
    } else {
      this.setState(this.state.inputPaymentMethods.filter((checkbox) => {
        return checkbox !== event.target.value
      }))
    }
  }) */



  createJob = () => {

    const paymentsMethods = this.state.paymentsMethods.filter((pagamento) => {
      return pagamento.isChecked === true
    }).map((pagamento) => {
      return pagamento.value
    })

    try {
      api.post('/jobs', {
        title: this.state.inputTitle,
        description: this.state.inputDescription,
        price: this.state.inputPrice,
        paymentMethods: paymentsMethods,
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

  onClickCheckbox = (pagamento, index) => {
    let checkedPaymentMethods = this.state.paymentMethods
    if (pagamento.isChecked) {
      checkedPaymentMethods[index].isChecked = false
    } else {
      checkedPaymentMethods[index].isChecked = true
    }
    this.setState({ paymentMethods: checkedPaymentMethods })

  }



  render() {

    const mapedPaymentMethods = this.state.inputPaymentMethods.map((pagamento, index) => {
      return <ul key={index}>
        <input
          type='checkbox'
          onClick={() => this.onClickCheckbox(pagamento, index)}

        />

      </ul>

    })

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

          {/*   {arrayCheckBox.map((checkbox) => {
            return (
              <label key={checkbox}>
                <input
                  type='checkbox'
                />
                {checkbox}
              </label>

            )
          })
          } */}

          {mapedPaymentMethods}


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
        <BotaoOferecerServico onClick={this.createJob}>Oferecer serviço!</BotaoOferecerServico>
        {/*Botão acima é sugestão de implementação*/}
      </MainContainer>
    )
  }
}