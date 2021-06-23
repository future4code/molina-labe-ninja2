import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import MainCadastro from '../components/main-cadastro/MainCadastro'
import { Container, GlobalStyle } from './styled'
import PageList from '../components/main-list/PageList'

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<GlobalStyle />
				<Header/>
        <Home />
				<MainCadastro />
        <PageList />
				<Footer/>
			</Container>
		)
	}
}
