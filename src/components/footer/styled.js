import styled from 'styled-components'

const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background-color: #F0F0F0;
  min-width: 100%;

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin-top: 40px;
  }

  p {
    text-align: center;
    font-size: 0.90em;
    padding: 10px 0;
  }

  .contactSocial {
    display: flex;
    flex-direction: row;
  }
`

const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`

const ContainerItem = styled.div`
  h2 {
    color: #4c4c4c;
    margin-bottom: 15px;
  }

  :nth-child(2) {
    margin-left: 100px;
  }

  img {
    max-width: 100%;
    width: 220px;
  }
`

const ItemContato = styled.div`
  display: flex;  

  span {
    font-size: 1.125em;
    color: #4c4c4c;
  }

  a {
    font-size: .85em;
    margin-left: 5px;
    color: #4c4c4c;

    :hover {
      color: #7C66C5;
    }
  }
`

const ContainerEndereco = styled.div`
  width: 180px;

  p {
    text-align: left;
    color: #4c4c4c;
  }
`

const Redes = styled.ul`    
  a {
    display: flex;
    align-items: center;
    color: #4c4c4c;
    transition: .2s;

    :hover {
      color: #7C66C5;
    }    
  }

  span {
    font-size: 1.125em;
    margin-top: 3px;
  }

  p {
    padding: 0;
    margin-left: 7px;
    font-size: 0.95em;
    font-weight: 500;
  }
`

const Line = styled.hr`
  width: 80%;
  height: 0.01rem;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 40px;
`

export { 
  ContainerFooter,
  ContainerInfo,
  ContainerItem,
  ItemContato,
  ContainerEndereco,
  Redes,
  Line
}