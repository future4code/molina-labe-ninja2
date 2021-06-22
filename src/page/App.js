import React from 'react'
import { Container, GlobalStyle } from './styled'
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import Footer from '../components/footer/Footer'
import SectionThird from '../components/main-institucional/sectionThird/SectionThird'

export default class App extends React.Component {
	render(){
		return(
      	<Container>
        	<GlobalStyle/>
			<MainInstitucional/>
			<SectionThird/>
			<Footer/>
      	</Container>
		)
	}
}
