import React from 'react'
import { Button } from './styled'

export default class Botao extends React.Component {
  render() {
    return (
      <Button title="Publicar Projeto" onClick={this.props.renderMainCadastro}>
        Publicar serviço
      </Button>
    )
  }
}
