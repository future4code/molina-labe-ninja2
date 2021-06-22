import React from 'react'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import { Container, GlobalStyle } from './styled'
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import Footer from '../components/footer/Footer'
import ListaOrdenacao from '../components/lista-ordenacao/ListaOrdenacao'

export default class App extends React.Component {
	render(){
		return(
      	<Container>
        <GlobalStyle/>
			<MainInstitucional/>
			{/* <MainCadastro/> */}
			{/* <ListaOrdenacao/> */}
			<Footer/>
      	</Container>
		)
	}
}
