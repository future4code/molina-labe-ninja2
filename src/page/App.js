import React from 'react'
import Botao from '../components/botao/Botao'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import MainListaFiltro from '../components/main-lista-filtro/MainListaFiltro'

import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
			  <MainListaFiltro/>
      </Container>
		)
	}
}
