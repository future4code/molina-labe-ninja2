import React from 'react'
import api from '../../services/api'
import CardServicos from '../cards-servicos/CardsServicos'
import Filter from '../filter/Filter'
import ListaOrdenacao from '../lista-ordenacao/ListaOrdenacao'
import Cart from '../cart/Cart'

import { Container, CardList, ContainerCart } from './styled'

export default class PageList extends React.Component {
  state = {
    servicos: [],
    pesquisa: '',
    filtroSelect: '',
    maxFilter: 1000000,
    minFilter: 0
  }

  componentDidMount(){
    this.pegarServicos()
  }

  onChangePesquisar = (event)=>{
		this.setState({
			pesquisa: event.target.value
		})
	}

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  pegarServicos  = async ()=>{
    try {
      const response = await api.get('jobs')
      this.setState({
        servicos: response.data.jobs
      })
      
    } catch (error) {
      alert(error.message)
    }
  }

  onChangeFiltroSelect = (event) => {
    this.setState ({
      filtroSelect: event.target.value
    })
  }


  ordenaSeletor = () => {
   switch (this.state.filtroSelect) {
     case "Título":
       this.state.servicos.sort((a,b)=> {
       if(a.title < b.title) { return -1; }
       if(a.title > b.title) { return 1; }
      return 0;
     });
       break;
     case "Valor de Remuneração":
       this.state.servicos.sort((a,b)=> a.price - b.price);
       break;
     case "Prazo":
      this.state.servicos.sort((a,b)=> {
        if(a.dueDate < b.dueDate) { return -1; }
        if(a.dueDate > b.dueDate) { return 1; }
       });
     default:
       break;
   }
  }

  render() {
    this.ordenaSeletor()

    const servicosFiltrados = this.state.servicos
      .filter((servico) => servico.title.toLowerCase().includes(this.state.pesquisa.toLowerCase()))
      .filter((servico) => servico.price < this.state.maxFilter)
      .filter((servico) => servico.price > this.state.minFilter)
  

    return (
      <Container>
        <Filter
          value={this.state.pesquisa}
					onChangePesquisar={this.onChangePesquisar}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
        />
        <CardList>
          <ListaOrdenacao
          onChangeFiltroSelect={this.onChangeFiltroSelect}
          value={this.state.filtroSelect}
          options={['Título', 'Valor de Remuneração', 'Prazo']}
          />
          {servicosFiltrados.map(({id, title, price, description, paymentMethods, dueDate})=>{
            return(               
              <CardServicos                 
                key={id}                 
                titulo={title}                 
                preco={price}                 
                descricao={description}                 
                paymentMethods={paymentMethods}  
                prazo={dueDate}         
            />             
            )           
            })}

        </CardList>
        <ContainerCart>
          <h2>Carrinho:</h2>
          <Cart />
          <Cart />
        </ContainerCart>
      </Container>
    )
    
  }
}