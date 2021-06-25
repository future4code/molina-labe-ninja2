import styled from 'styled-components'

const InputDescricao = styled.textarea`
  width: 400px;
  height: 200px;
  margin-top: 31px;

`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerPagamento = styled.div`
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  width: 530px;
`

const InputServico = styled.input`
  width: 300px;
  margin-top: 18px;

`

const BotaoOferecerServico = styled.button`
  margin: 10px;
  width: 100px;
  height: 49px;
  cursor: pointer;
`

const InputDataEstilizado = styled.input`
  width: 141px;
  height: 15px;
  padding: 2px;
  cursor: pointer;
`

const DescriçãoServiço = styled.h4`
margin-top: 30px;
`

const Titulo = styled.h1`
color: var(--purple-color);
margin-top: -15px;
margin-bottom: 30px;
`

const PagamentoContainer = styled.div `
display: flex;
flex-direction: column;
padding: 6px;

`

const Checkbox = styled.input `
cursor: pointer;
`

export  {
  InputDescricao,
  MainContainer,
  ContainerPagamento,
  InputServico,
  BotaoOferecerServico,
  InputDataEstilizado,
  DescriçãoServiço,
  Titulo,
  PagamentoContainer,
  Checkbox
  
}