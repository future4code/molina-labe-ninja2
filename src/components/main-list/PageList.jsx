import React from 'react'
import CardServicos from '../cards-servicos/CardsServicos'
import FilterPrice from '../filterPrice/FilterPrice'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'
import Cart from '../cart/Cart'

import { Container, CardList, ContainerCart } from './styled'

export default class PageList extends React.Component {
  render() {
    return (
      <Container>
        <FilterPrice />
        <CardList>
          <ListaOrdenacao />
          <CardServicos />
          <CardServicos />
          <CardServicos />
          <CardServicos />
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