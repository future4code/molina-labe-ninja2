import React from 'react'
import toast from 'react-hot-toast'
import api from '../../services/api'
import {
  InputDescricao,
  MainContainer,
  ContainerPagamento,
  InputServico,
  BotaoOferecerServico,
  InputDataEstilizado,
  DescriçãoServiço,
  Titulo,
  PagamentoContainer,
  Checkbox
} from './styled'
export default class MainCadastro extends React.Component {
  state = {
    inputTitle: '',
    inputPrice: '',
    inputDescription: '',
    inputPaymentMethods: [
      { payment: 'Paypal', isChecked: false },
      { payment: 'Pix', isChecked: false },
      { payment: 'Credito', isChecked: false },
      { payment: 'Boleto', isChecked: false }
    ],
    inputDueDate: ''
  }
  
  onClickCheckBox = (payment, index) => {
    let newPaymentMethods = this.state.inputPaymentMethods
    if (payment.isChecked) {
      newPaymentMethods[index].isChecked = false
    } else {
      newPaymentMethods[index].isChecked = true
    }
    this.setState({ inputPaymentMethods: newPaymentMethods })
  }

  onClickIsCheckedTrue = () => {
    const truePaymentMethods = this.state.inputPaymentMethods.filter((payment) => {
      return payment.isChecked === true
    }).map((payment) => {
      return payment.payment
    })
    this.createJob(truePaymentMethods)
  }

  createJob = async (truePaymentMethods) => {
    const body = {
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      price: Number(this.state.inputPrice),
      paymentMethods: truePaymentMethods,
      dueDate: this.state.inputDueDate
    }
    try {
      await api.post('jobs', body)
      toast.success('Serviço cadastrado com sucesso!')
      this.setState({
        inputTitle: '',
        inputPrice: '',
        inputDescription: '',
        inputDueDate: '',
        inputPaymentMethods: [
          { payment: 'Paypal', isChecked: false },
          { payment: 'Pix', isChecked: false },
          { payment: 'Credito', isChecked: false },
          { payment: 'Boleto', isChecked: false }
        ]
      })
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  render() {
    const mapedPaymentMethods = this.state.inputPaymentMethods.map((payment, index) => {
      return <li key={index}>
        <Checkbox
          type='checkbox'
          checked={payment.isChecked}
          onChange={() => this.onClickCheckBox(payment, index)}
        />
        {payment.payment}
      </li>
    })
    return (
      <MainContainer>
        <Titulo>Publique aqui a sua oferta de serviço!</Titulo>
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
          <PagamentoContainer>
          {mapedPaymentMethods}
          </PagamentoContainer>
          <h4>Valor</h4>
          <input
            placeholder="R$"
            value={this.state.inputPrice}
            onChange={e => this.setState({ inputPrice: e.target.value })}
          />
        </ContainerPagamento>
        <h4>Prazo</h4>
        <InputDataEstilizado
          type='date'
          value={this.state.inputDueDate}
          onChange={e => this.setState({ inputDueDate: e.target.value })}
        />
        <DescriçãoServiço>Descrição do serviço:</DescriçãoServiço>
        <InputDescricao cols="30" rows="5"
          value={this.state.inputDescription}
          onChange={e => this.setState({ inputDescription: e.target.value })}
        />
        <BotaoOferecerServico onClick={this.onClickIsCheckedTrue}>Oferecer serviço!</BotaoOferecerServico>
      </MainContainer>
    )
  }
}