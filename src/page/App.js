import React from 'react'
import Icons from '../components/icons-section/Icons'
import { Container, GlobalStyle } from './styled'

export default class App extends React.Component {
	render(){
		return(
      <Container>
        <GlobalStyle/>
        <Icons />
      </Container>
		)
	}
}
