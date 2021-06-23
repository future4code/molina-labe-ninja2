import styled from "styled-components"

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid black;
`
const SearchContainer = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 18px;

        input{
    width:700px;
    height: 30px;
    background-color: #F0F0F0;
    border: none;
    padding-left: 15px;
    }
`

const ButtonSearch = styled.button`
    width: 124px;
    height: 30px;
    border: none;
    background-color: var(--purple-color);
`

const ContainerItens = styled.div`
    display: flex;
    justify-content: space-around;
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;

        button{
            width: 154px;
            height: 30px;
            border: none;
            background-color: var(--purple-color);
        }
`
const TextContainer = styled.div`
    margin-top: 100px;
        p{
            font-family: "Edo", sans-serif;
            color: var(--purple-color);
            font-size: 54px;
        }
`

const ImageContainer = styled.div`
    margin-top: 24px;
`

const ContainerAglomerado = styled.div`
    display: flex;
    flex-direction: column;
`
export {HeaderContainer, SearchContainer, ButtonSearch, ContainerItens, ButtonsContainer, TextContainer, ImageContainer, ContainerAglomerado}