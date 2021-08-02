import React from 'react'
import Comentario from './components/Comentario'
import './App.css'


function App() {
   return (
      <div>
        <div>Oi</div>
        <Comentario nome="Samuel" email="samueldj@gmail.com" data={new Date(2021, 3, 14)} >
           Olá tudo legal
        </Comentario>
        <Comentario nome="Angela" email="angeliscosmeticos@gmail.com" data={new Date(2020, 5, 10)} >
           Tá de boa
        </Comentario>
        <Comentario nome="Michael" email="michel21@gmail.com" data={new Date(2019, 7, 23)} >
           Beleza
        </Comentario>

      </div> 
   )
}

export default App
