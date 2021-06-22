import React from 'react'
import {MainContainer} from './styled'


export default class MainListaFiltro extends React.Component{

    render(){

        return(
            <MainContainer>
                <h4>Valor mínimo</h4>
                <input type="number"/>
                <h4>Valro máximo</h4>
                <input type="number"/>


            </MainContainer>
        )
    }
}