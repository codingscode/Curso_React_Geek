import React, { Component } from 'react'
import Comentario from './components/Comentario'
import './App.css'


class App extends Component {
   state = {
      comentarios: [
         {nome: 'Samuel', email: 'samueldj@gmail.com', data: new Date(2021, 3, 14), mensagem: 'Olá tudo legal'},
         {nome: 'Angela', email: 'angeliscosmeticos@gmail.com', data: new Date(2020, 5, 10), mensagem: 'Tá de boa'},
         {nome: 'Michael', email: 'michel21@gmail.com', data: new Date(2019, 7, 23), mensagem: 'Beleza'}
      ],
      novoComentario: {
         nome: '', email: '', mensagem: ''
      }
   }

   adicionarComentario = (evento) => {
      evento.preventDefault()
      console.log('Adicionando comentário...')

      const novoComentario = {...this.state.novoComentario, data: new Date()}
      
      this.setState({
         comentarios: [...this.state.comentarios, novoComentario],
         novoComentario: { nome: '', email: '', mensagem: '' }
      })
   }

   digitacao = evento => {
      const { value, name } = evento.target
      const [ valor, nome_campo ] = [ value, name ]
      this.setState({ novoComentario: {...this.state.novoComentario, [nome_campo]: valor} })
   }

   removerComentario = comentario => {
      let lista = this.state.comentarios
      lista = lista.filter(c => c !== comentario)
      this.setState({ comentarios: lista })
   }

   render() {
      return (
         <div class="App" >
           <h1>Meu Projeto</h1>
           {this.state.comentarios.map((cada, indice) => (
               
               <Comentario nome={cada.nome} email={cada.email} data={cada.data} key={indice} Remover={this.removerComentario.bind(this, cada)} >
                  {cada.mensagem}
               </Comentario>
           ))}

            <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario" >
               <h2>Adicionar Comentário</h2>
               <div >
                  <input type="text" name="nome" placeholder="Digite seu nome" value={this.state.novoComentario.nome} onChange={this.digitacao} />
               </div>
               <div >
                  <input type="email" name="email" placeholder="Digite seu email" value={this.state.novoComentario.email} onChange={this.digitacao} />
               </div>
               <div >
                  <textarea name="mensagem" rows="4" value={this.state.novoComentario.mensagem} onChange={this.digitacao} />
               </div>
               <button type="submit" >Adicionar Comentário</button>
            </form>
         </div> 
      )
      
   }
}

export default App
