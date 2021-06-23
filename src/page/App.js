import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<GlobalStyle />
				<Header/>
				<Home />
				<Footer/>
			</Container>
		)
	}
}
