import React from 'react'
import api from '../../services/api'
import CardServicos from '../cards-servicos/CardsServicos'
import Filter from '../filter/Filter'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'
import axios from 'axios'
import Cart from '../cart/Cart'

import { Container, CardList, ContainerCart } from './styled'

export default class PageList extends React.Component {
  state = {
    servicos: [],
    pesquisa: ''
  }

  componentDidMount(){
    this.pegarServicos()
  }

  onChangePesquisar = (event)=>{
		this.setState({
			pesquisa: event.target.value
		})
	}

  url = 'https://labeninjas.herokuapp.com'
  headers = {
    headers: {
        Authorization: 'e2190c39-7930-4db4-870b-bed0e5e4b88e'
    }
  }

  pegarServicos  = async ()=>{
    try {
      const response = await axios.get(`${this.url}/jobs`, this.headers)
      this.setState({
        servicos: response.data.jobs
      })
      
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    const servicosFiltradosNome = this.state.servicos
    .filter((servico)=>servico.title.toLowerCase().includes(this.state.pesquisa.toLowerCase()))

    return (
      <Container>
        <Filter
          value={this.state.pesquisa}
					onChangePesquisar={this.onChangePesquisar}
        />
        <CardList>
          <ListaOrdenacao />
          {servicosFiltradosNome.map(({id, title, price, description})=>{
            return(
              <CardServicos
                key={id}
                titulo={title}
                preco={price}
                descricao={description}
              />
            )
          })}
        </CardList>
        <ContainerCart>
          <h2>Carrinho:</h2>
          <Cart />
          <Cart />
        </ContainerCart>
      </Container>
    )
  }
}