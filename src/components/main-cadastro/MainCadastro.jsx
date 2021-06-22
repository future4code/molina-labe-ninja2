import React from 'react'
import {InputDescricao, MainContainer, ContainerPagamento, SelectEstilizado, InputServico, BotaoOferecerServico} from './styled'






export default class MainCadastro extends React.Component {

    render(){

        return(
            <MainContainer>
                <h4>
                    Nome do Serviço
                </h4>
            <InputServico placeholder="Nome do serviço"/>
            
            <ContainerPagamento>
            <h4>Método de pagamento</h4>
            <SelectEstilizado>
                <option>Picpay</option>
                <option>PIX</option>
                <option>Crédito</option>
                <option>Boleto</option>
            </SelectEstilizado>

            <h4>Valor</h4>
            <input placeholder="Valor"/>

            </ContainerPagamento>

            <h4>Descrição do serviço:</h4>
            <InputDescricao/>

            <BotaoOferecerServico>Oferecer serviço!</BotaoOferecerServico>

            {/*Botão acima é sugestão de implementação*/}

            </MainContainer>

        )
    }
}