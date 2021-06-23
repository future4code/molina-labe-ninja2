import React from 'react'
import { Button } from './styled'

export default class Botao extends React.Component {
	render(){
		return(
			<Button onClick={this.props.renderMainCadastro}>
        		Publicar projeto
      		</Button>
		)
	}
}
