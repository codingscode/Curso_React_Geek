import React from 'react'
import './App.css'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import Usuarios from './components/Usuarios/Usuarios'
import Inicio from './components/Inicio/Inicio'


function App() {
  return (
    <Router>
       <div className="App">
         <header>
            <nav>
               <ul>
                  <li><Link to="/" className="active" >Início</Link></li>
                  <li><Link to="/usuarios" >Usuários Cadastrados</Link></li>
                  <li><Link to="/adicionar" >Adicionar Usuário</Link></li>                              
               </ul>
            </nav>
         </header>
         <main>
           <Switch>
              <Route path="/" exact >
                 <Inicio />
              </Route>
              <Route path="/usuarios" >
                 <Usuarios />
              </Route>
              <Route path="/adicionar" >
                 <AdicionarUsuario />
              </Route>
              <Route path="*" >
                 <PaginaNaoEncontrada />
              </Route>
           </Switch>
           
         </main>
       </div>
    </Router>
  )
}

function PaginaNaoEncontrada() {

   return (
      <>
         <h1>404</h1>
         <p>Página não encontrada</p>
      </>
   )
}

export default App
