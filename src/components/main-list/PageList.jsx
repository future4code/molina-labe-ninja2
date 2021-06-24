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
    filtroSelect: '' 
  }

  componentDidMount(){
    this.pegarServicos()
  }

  onChangePesquisar = (event)=>{
		this.setState({
			pesquisa: event.target.value
		})
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
       this.state.servicos.sort((a,b)=> {
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
       });
     case "Prazo":
      this.state.servicos.sort((a,b)=> {
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
       });
     default:
       break;
   }
  }

  render() {
    this.ordenaSeletor()
    console.log(this.state.servicos)
    const servicosFiltradosNome = this.state.servicos
    .filter((servico)=>servico.title.toLowerCase().includes(this.state.pesquisa.toLowerCase()))
    return (
      <Container>
        <Filter
          value={this.state.pesquisa}
					onChangePesquisar={this.onChangePesquisar}
        />
        <CardList>

          <ListaOrdenacao />
          {servicosFiltradosNome.map(({id, title, description, price, paymentMethods, dueDate, taken})=>{
            return(
              <CardServicos
                id={id}
                service={title}
                description={description}
                price={price}
                paymentMethods={paymentMethods}
                date={dueDate}
                taken={taken}
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