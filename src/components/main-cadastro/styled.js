import styled from 'styled-components'

const InputDescricao = styled.input`
width: 400px;
height: 200px;

`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const ContainerPagamento = styled.div`

display: flex;
padding: 20px;
align-items: center;
justify-content: space-between;

`

const SelectEstilizado = styled.select `

    width: 100px;
    height: 23px;
    padding: 2px;


`

export  {InputDescricao, MainContainer, ContainerPagamento, SelectEstilizado}