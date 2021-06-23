import styled from "styled-components"


const ContainerGeral = styled.div`
    padding: 0 100px;
`

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const Titulo = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #4B4B4B;
   
`

const Step = styled.div`
    h4 {
        font-size: 14px;
         margin-bottom: 10px;
    }
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #4B4B4B;
    margin-right: 10px;
`

const BotaoPublicar = styled.button`
    background-color: #59C156;
    font-size: 8px;
    border-radius: 20px;
    color: white;
`

export 
{Container, 
Titulo, 
Step, 
ContainerGeral,
BotaoPublicar}