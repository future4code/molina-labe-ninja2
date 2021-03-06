import React from 'react'
import toast  from 'react-hot-toast';

import { IoCartOutline } from 'react-icons/io5'
import api from '../../services/api'
import CardServicos from '../cards-servicos/CardsServicos'
import Filter from '../filter/Filter'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'
import Cart from '../cart/Cart'

import { Container, CardList, ContainerCart, Line } from './styled'

export default class PageList extends React.Component {
  state = {
    servicos: [],
    pesquisa: '',
    filtroSelect: '',
    maxFilter: 10000,
    minFilter: 0,
    carrinho: []
  }

  componentDidMount() {
    this.pegarServicos()
  }

  onChangePesquisar = (event) => {
    this.setState({
      pesquisa: event.target.value
    })
  }

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value })
  }

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value })
  }

  pegarServicos = async () => {
    try {
      const response = await api.get('jobs')
      this.setState({
        servicos: response.data.jobs
      })

    } catch (error) {
      toast.error(error.message)
    }
  }

  onChangeFiltroSelect = (event) => {
    this.setState({
      filtroSelect: event.target.value
    })
  }


  ordenaSeletor = () => {
    switch (this.state.filtroSelect) {
      case "Título":
        this.state.servicos.sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
        break;
      case "Valor de Remuneração":
        this.state.servicos.sort((a, b) => a.price - b.price);
        break;
      case "Prazo":
        this.state.servicos.sort((a, b) => {
          if (a.dueDate < b.dueDate) { return -1; }
          if (a.dueDate > b.dueDate) { return 1; }
          return 0;
        });
        break;
      default:
        break;
    }
  }

  addCarrinho = ((id, title, price) => {
    if (this.state.carrinho.length < 1) {
      const novoItem = {
        id: id,
        titulo: title,
        preco: price
      }

      const novoCarrinho = [novoItem, ...this.state.carrinho]

      this.setState({
        carrinho: novoCarrinho
      })

      toast.success('Serviço adicionado ao carrinho')
    } else {
      let existe = true
      for (let item of this.state.carrinho) {
        if (id === item.id) {
          existe = true
          break
        } else {
          existe = false
        }
      }

      if (!existe) {
        const novoItem = {
          id: id,
          titulo: title,
          preco: price
        }

        const novoCarrinho = [novoItem, ...this.state.carrinho]

        this.setState({
          carrinho: novoCarrinho
        })
        toast.success('Serviço adicionado ao carrinho')
      } else {
        toast('Serviço ja contratado', { icon: '⚠️'})
      }
    }
  })

  delete = ((id) => {
    const novoCarrinho = this.state.carrinho.filter((idItem) => {
      return id !== idItem.id
    })
    this.setState({
      carrinho: novoCarrinho
    })

    toast.error('Serviço excluído do carrinho')
  })

  render() {
    this.ordenaSeletor()
    const servicosFiltrados = this.state.servicos
      .filter((servico) => servico.title.toLowerCase().includes(this.state.pesquisa.toLowerCase()))
      .filter((servico) => servico.price < this.state.maxFilter)
      .filter((servico) => servico.price > this.state.minFilter)

    return (
      <Container>
        <div className="main">
          <Filter
            value={this.state.pesquisa}
            onChangePesquisar={this.onChangePesquisar}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeMinFilter={this.onChangeMinFilter}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
          />
          <CardList>
            <div className="ordenacao">
              <ListaOrdenacao
                onChangeFiltroSelect={this.onChangeFiltroSelect}
                value={this.state.filtroSelect}
                options={['Título', 'Valor de Remuneração', 'Prazo']}
              />
            </div>
            {servicosFiltrados.map(({ id, title, price, description, paymentMethods, dueDate }) => {
              return (
                <CardServicos
                  key={id}
                  titulo={title}
                  preco={price}
                  descricao={description}
                  paymentMethods={paymentMethods}

                  prazo={dueDate.slice(0, 10)}

                  onClickAdd={() => this.addCarrinho(id, title, price)}
                />
              )
            })}
          </CardList>
          <ContainerCart>
            <h2><span><IoCartOutline /></span> Carrinho</h2>
            <Line />
            {this.state.carrinho.map(({ id, titulo, preco }) => {
              return (
                <Cart
                  key={id}
                  id={id}
                  title={titulo}
                  price={preco}
                  onClickDelete={() => this.delete(id)}
                />
              )
            })}
          </ContainerCart>
        </div>
      </Container>
    )

  }
}