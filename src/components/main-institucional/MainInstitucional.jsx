import React from 'react';
import {ContainerUm, TituloUm, StepOne, StepTwo, StepThree, StepFour, BotaoPublicar} from './styled'
import SectionThird from './sectionThird/SectionThird';

export default class MainInstitucional extends React.Component {
	render(){
		return(
        <div>
             <TituloUm>Como funciona?</TituloUm>
                <ContainerUm>
                    <StepOne>
                        <h4>Publicar</h4>
                        <p>
                            Conte-nos em poucas palavras o que você precisa. É
                            grátis e sem compromisso!
                        </p>
                    </StepOne>
                    <StepTwo>
                        <h4>Selecionar</h4>
                        <p>
                            Receba propostas de excelentes freelancers. 
                            Escolha o melhor para o seu projeto.
                        </p>
                    </StepTwo>
                    <StepThree>
                        <h4>Começar</h4>
                        <p>
                            Você faz o pagamento com total garantia sobre 
                            o valor depositado e já começa a trabalhar
                        </p>
                    </StepThree>
                    <StepFour>
                        <h4>Aceitar</h4>
                        <p>
                            Receba o projeto concluído e libere o 
                            valor depositado ao freelancer.
                        </p>
                    </StepFour>
                </ContainerUm>
            <div>
                <BotaoPublicar type={Text}>Publique um projeto</BotaoPublicar>
            </div>
        </div>
        )
	}
}