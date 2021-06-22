import React from 'react'
import { Container, GlobalStyle } from './styled'
<<<<<<< HEAD
=======
import MainInstitucional from '../components/main-institucional/MainInstitucional'
import Footer from '../components/footer/Footer'
import SectionThird from '../components/main-institucional/sectionThird/SectionThird'
>>>>>>> 2673c10d3d0b9572306adb4445bc545f1a110a5c

export default class App extends React.Component {
	render(){
		return(
<<<<<<< HEAD
      <Container>
        <GlobalStyle/>
		
      </Container>
=======
      	<Container>
        	<GlobalStyle/>
			<MainInstitucional/>
			<SectionThird/>
			<Footer/>
      	</Container>
>>>>>>> 2673c10d3d0b9572306adb4445bc545f1a110a5c
		)
	}
}
