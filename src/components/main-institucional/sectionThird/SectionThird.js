import React from 'react'
import styled from 'styled-components'
import Botao from '../../botao/Botao'

const ContainerGeral = styled.section`
    padding: 40px 100px;
    border: 1px solid red;
    h2{
        margin-bottom: 20px;
    }
`

const TerceiraSecao = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    img{
        margin-bottom: 10px;
    }

    h4{
        margin-bottom: 10px;
    }

    p{
        width: 540px;
        margin-bottom: 20px;
    }
`

const ContainerItem = styled.div`
    border: 1px solid red;
`

class SectionThird extends React.Component {
    render(){
        return (
            <ContainerGeral>
                <h2>Como a LabeNinjas pode te ajudar?</h2>
                <TerceiraSecao>
                    <ContainerItem>
                        <div>
                            <img src='' alt='imagem de pessoas'></img>
                        </div>
                        
                        <h4>Encontre o freelancer perfeito</h4>
                        <p>
                            É a sua primeira vez na LabeNinjas? Publique um trabalho e tenha
                            acesso as propostas dos freelancers para por suas ideias para trabalhar.
                        </p>
                        <Botao/>
                    </ContainerItem>

                    <ContainerItem>
                        <div>
                            <img src='' alt='imagem de pessoas'></img>
                        </div>
                        <h4>Comece a trabalhar como freelancer</h4>
                        <p>
                            Voce é freelancer? Na LabeNinjas voce pode escolher entre centenas de
                            projetos para trabalhar desde qualquer lugar. 
                        </p>
                        <Botao/>
                    </ContainerItem>
                </TerceiraSecao>
            </ContainerGeral>    
        )
    } 
}

export default SectionThird
