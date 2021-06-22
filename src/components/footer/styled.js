import styled from 'styled-components'

const ContainerFooter = styled.footer`
    margin-top: 40px;
    background-color: #F0F0F0;
    padding: 40px 200px 0 200px;

    p{
        text-align: center;
        font-size: 0.90em;
        padding: 10px 0;
    }
`

const ContainerInfo = styled.div`
    display: flex;
    border-bottom: 1px solid #dAd9d6;
    padding-bottom: 30px;
`

const ContainerItem = styled.div`
    h2{
        color: #4c4c4c;
        margin-bottom: 15px;
    }

    :nth-child(2){
        margin: 0 150px;
    }

    img{
        max-width: 100%;
        width: 220px;
    }
`

const ItemContato = styled.div`
    display: flex;

    span{
        font-size: 1.125em;
        color: #4c4c4c;
    }

    a{
        font-size: .85em;
        margin-left: 5px;
        color: #4c4c4c;

        :hover{
            color: #7C66C5;
        }
    }
`

const ContainerEndereco = styled.div`
    width: 180px;  

    p{
        text-align: left;
        color: #4c4c4c;
    }
`

const Redes = styled.ul`
    
    a{
        display: flex;
        align-items: center;
        color: #4c4c4c;
        transition: .2s;

        :hover{
            color: #7C66C5;
        }    
    }

    span{
        font-size: 1.125em;
        margin-top: 3px;
    }

    p{
        padding: 0;
        margin-left: 7px;
        font-size: 0.95em;
        font-weight: 500;
    }
`

export {ContainerFooter, ContainerInfo, ContainerItem, ItemContato, ContainerEndereco, Redes}