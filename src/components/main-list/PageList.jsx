import React from 'react'
import CardServicos from '../cards-servicos/CardsServicos'
import FilterPrice from '../filterPrice/FilterPrice'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'

import { Container, CardList } from './styled'

export default class PageList extends React.Component {
  render() {
    return (
      <Container>
        <FilterPrice />
        <CardList>
          <ListaOrdenacao />
          <CardServicos />
        </CardList>
      </Container>
    )
  }
}