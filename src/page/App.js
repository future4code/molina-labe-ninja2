import React from 'react'
import Botao from '../components/botao/Botao'
import Footer from '../components/footer/Footer'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
			<Botao />
			<Footer/>
      </Container>
		)
	}
}
