import React from 'react'
import { Container } from './styled'
import { FaTabletAlt, FaMobileAlt } from "react-icons/fa";

export default class Icons extends React.Component {
	render(){
		return(
			<Container>
        <span><FaMobileAlt/></span>
        <h2>Lance seu App Mobile</h2>
        <p>Alcance seus clientes em qualquer lugar atráves de um App.</p>
      </Container>
		)
	}
}
