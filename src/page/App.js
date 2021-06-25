import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import { Container, GlobalStyle, Line } from './styled'
import PageList from '../components/main-list/PageList'

export default class App extends React.Component {

	state = {
		pagina: 'Home',
	}

	changePage = () => {
		switch (this.state.pagina) {
			case 'MainCadastro':
				return <MainCadastro />
			case 'PageList':
				return <PageList />
			case 'Home':
				return  <Home
					renderMainCadastro={this.renderMainCadastro}
					renderPageList={this.renderPageList}
				/> 
			default:
				return <div>Pagina não encontrada.</div>


		}
	}

	renderMainCadastro = () => {
		this.setState({ pagina: 'MainCadastro' })
		console.log('cliquei')
	}

	renderPageList = () => {
		this.setState({ pagina: 'PageList' })
	} 

	render() {

		return (
			<Container>
				<GlobalStyle />
				<Header
					renderMainCadastro={this.renderMainCadastro}
					renderPageList={this.renderPageList}
				/>
        <Line/>
				{this.changePage()}
				<Footer />
			</Container>
		)
	}
}
