import React from 'react'
import Botao from '../components/botao/Botao'
import Footer from '../components/footer/Footer'
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import Header from '../components/header/Header'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
      </Container>
		)
	}
}
