import React from "react"
import labeninjas2 from '../../img/labeninjas2.png'
import Botao from '../botao/Botao'
import {HeaderContainer,
    SearchContainer,
    ButtonSearch,
    ContainerItens,
    ButtonsContainer,
    TextContainer,
    ImageContainer,
    ContainerAglomerado
} from './styled'

export default class Header extends React.Component {

    

    render () {
        return (
            <HeaderContainer>
                <SearchContainer>
                    <ButtonSearch 
                        onClick=""
                        variant="contained" 
                        color="primary">Buscar serviços</ButtonSearch>
                        <input
                            placeholder="Pesquisar"
                            type="search" 
                        />
                </SearchContainer>
                <ContainerItens>
                    <ImageContainer>
                        <a href='/'><img src={labeninjas2} alt="Logo da Labeninjas" /></a>
                    </ImageContainer>
                        <ContainerAglomerado>
                            <TextContainer>
                                <p>O TALENTO CERTO,<br/> NO MOMENTO CERTO!</p>
                            </TextContainer> 
                            <ButtonsContainer>
                                <Botao renderMainCadastro={this.props.renderMainCadastro}/>
                                <button onClick={this.props.renderPageList}>Serviços</button>
                            </ButtonsContainer>
                        </ContainerAglomerado>
                </ContainerItens>
        </HeaderContainer>
        )
    }
}