import React from 'react'

import Footer from '../components/footer/Footer'
import MainInstitucional from '../components/main-institucional/MainInstitucional'


import Botao from '../components/botao/Botao'
import ListaOrdenacao from '../components/lista-ordenacao/ListaOrdenacao'

import MainCadastro from '../components/main-cadastro/MainCadastro'
import MainListaFiltro from '../components/main-lista-filtro/MainListaFiltro'


import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>

			  <MainInstitucional/>
			  <MainCadastro/>
        <Footer/>

			  <ListaOrdenacao/>


      </Container>
		)
	}
}
