import React from 'react';
import { Container, Titulo, Step, BotaoPublicar, ContainerGeral } from './styled'
import SectionThird from './sectionThird/SectionThird';
import SectionSecond from './sectionSecond/SectionSecond'
import Botao from '../botao/Botao'

export default class MainInstitucional extends React.Component {
    render() {
        return (
            <ContainerGeral>
                <div>
                    <Titulo>Como funciona?</Titulo>
                    <Container>
                        <Step>
                            <h4>Publicar</h4>
                            <p>
                                Conte-nos em poucas palavras o que você precisa. É
                                grátis e sem compromisso!
                        </p>
                        </Step>
                        <Step>
                            <h4>Selecionar</h4>
                            <p>
                                Receba propostas de excelentes freelancers.
                                Escolha o melhor para o seu projeto.
                        </p>
                        </Step>
                        <Step>
                            <h4>Começar</h4>
                            <p>
                                Você faz o pagamento com total garantia sobre
                                o valor depositado e já começa a trabalhar
                        </p>
                        </Step>
                        <Step>
                            <h4>Aceitar</h4>
                            <p>
                                Receba o projeto concluído e libere o
                                valor depositado ao freelancer.
                        </p>
                        </Step>
                    </Container>
                    <div>
                        <Botao/>
                    </div>
                </div>

                <SectionSecond/>
                <SectionThird/>



            </ContainerGeral>
        )
    }
}