import styled from 'styled-components'

const ContainerGeral = styled.section`
  padding: 40px 100px;
  h2{
    margin-bottom: 20px;
  }
`

const TerceiraSecao = styled.div`
  display: flex;
  justify-content: space-between;
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
`

export { ContainerGeral, TerceiraSecao, ContainerItem }