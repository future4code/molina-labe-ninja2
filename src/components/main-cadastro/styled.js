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
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  width: 530px;
`

const SelectEstilizado = styled.select `
  width: 100px;
  height: 23px;
  padding: 2px;
`

const InputServico = styled.input`
  width: 300px;
`

const BotaoOferecerServico = styled.button`
  margin: 10px;
`

const InputDataEstilizado = styled.input`
  width: 141px;
  height: 15px;
  padding: 2px;
`

export  {
  InputDescricao,
  MainContainer,
  ContainerPagamento,
  SelectEstilizado,
  InputServico,
  BotaoOferecerServico,
  InputDataEstilizado
}