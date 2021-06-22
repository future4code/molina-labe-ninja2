import React from 'react'
import Header from '../components/header/Header'
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import Footer from '../components/footer/Footer'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<GlobalStyle />
				<Header/>
				<MainInstitucional/>
				<Footer/>
			</Container>
		)
	}
}
