import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
display: flex;
/* border: 1px solid purple; */
width: 100%;
`
const SearchContainer = styled.div`
margin: 0 auto;
margin-top: 18px;

    input{
  width:700px;
  height: 30px;
  background-color: #F0F0F0;
  border: none;
}
`
const Button = styled.button`
width: 124px;
height: 30px;
border: none;
background-color: #8166CB;
`


export default class Header extends React.Component {


    render () {
     return (
        <HeaderContainer>
            <SearchContainer>
                <Button 
                onClick=""
                variant="contained" 
                color="primary">Projetos</Button>
                <input
                placeholder="Pesquisar"
                type="search" />
            </SearchContainer>

    </HeaderContainer>
     )
    }
}