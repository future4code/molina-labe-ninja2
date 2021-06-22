import React from 'react'
import { Container } from './styled'
import { FaMobileAlt } from "react-icons/fa";

export default class SectionSecond extends React.Component {
	render(){
		return(
			<Container>
        <h3>É muito fácil colocar em prática as suas idéias hoje</h3>
        <div>
          <span><FaMobileAlt/></span>
          <h2>Lance seu App Mobile</h2>
          <p>Alcance seus clientes em qualquer lugar atráves de um App.</p>
        </div>
      </Container>
		)
	}
}
