import React from 'react'
import Footer from '../components/footer/Footer'
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
			  <MainInstitucional/>
			  <MainCadastro/>
        <Footer/>
      </Container>
		)
	}
}
