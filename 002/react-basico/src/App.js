import React, { Component } from 'react'
import Comentario from './components/Comentario'
import './App.css'


class App extends Component {
   state = {
      comentarios: [
         {nome: 'Samuel', email: 'samueldj@gmail.com', data: new Date(2021, 3, 14), mensagem: 'Olá tudo legal'},
         {nome: 'Angela', email: 'angeliscosmeticos@gmail.com', data: new Date(2020, 5, 10), mensagem: 'Tá de boa'},
         {nome: 'Michael', email: 'michel21@gmail.com', data: new Date(2019, 7, 23), mensagem: 'Beleza'}
      ]
   }

   render() {
      return (
         <div>
           <div>Oi</div>
           {this.state.comentarios.map((cada, indice) => (
               
               <Comentario nome={cada.nome} email={cada.email} data={cada.data} key={indice} >
                  {cada.mensagem}
               </Comentario>
           ))}
   
         </div> 
      )
      
   }
}

export default App
