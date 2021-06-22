import React from 'react'
import SectionSecond from '../components/sectionSecond/SectionSecond'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
        <SectionSecond />
      </Container>
		)
	}
}
