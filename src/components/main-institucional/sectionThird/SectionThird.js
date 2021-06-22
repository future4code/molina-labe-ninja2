import React from 'react'
import styled from 'styled-components'
import Botao from '../../botao/Botao'

const TerceiraSecao = styled.section`
    padding: 40px 100px;
`


class SectionThird extends React.Component {
    rednder(){
        return (
            <TerceiraSecao>
                <h2>Como a LabeNinjas pode te ajudar?</h2>
                <div>
                    <img></img>
                    <h4></h4>
                    <p>
                        É a sua primeira vez na LabeNinjas? Publique um trabalho e tenha
                        acesso as propostas dos freelancers para por suas ideias para trabalhar.
                    </p>
                   <Botao/>
                </div>
            </TerceiraSecao>
        )
    } 
}

export default SectionThird
