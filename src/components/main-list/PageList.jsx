import React from 'react'
import api from '../../services/api'
import CardServicos from '../cards-servicos/CardsServicos'
import FilterPrice from '../filterPrice/FilterPrice'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'
import Cart from '../cart/Cart'

import { Container, CardList, ContainerCart } from './styled'

export default class PageList extends React.Component {
  state = {
    servicos: []
  }

  componentDidMount = () => {
    this.showServicos()
  }

  showServicos = () => {
    api.get('/jobs').then((res) => {
      this.setState({ servicos: res.data.jobs})
    }).catch((err) => {
      alert(err)
    })
  }
  
  render() {
    return (
      <Container>
        <FilterPrice />
        <CardList>
          <ListaOrdenacao />
          {this.state.servicos.map(({id, title, description, price, paymentMethods, dueDate, taken}) => {
            return (
              <CardServicos 
                id={id}
                service={title}
                description={description}
                price={price}
                paymentMethods={paymentMethods}
                date={dueDate}
                taken={taken}
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