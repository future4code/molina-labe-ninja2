import React from 'react'
import {MainContainer} from './styled'

export default class ListaOrdenacao extends React.Component {

    render() {

        return (
            <MainContainer>
                <select>
                    <option>Título</option>
                    <option>Valor remuneração</option>
                    <option>Prazo</option>
                    
                </select>
            </MainContainer>
        )
    }
}