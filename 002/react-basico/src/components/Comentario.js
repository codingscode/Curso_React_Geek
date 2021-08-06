
import React from 'react'
import './Comentario.css'
import imgUsuario from './usuario.png'


const Comentario = (props) => {
   //props.nome = 'Simon'  // dá erro
   
   return (
        <div className="Comentario" >
            <img class="avatar" src={imgUsuario} alt={props.nome} />
            <div class="conteudo" >
                <div class="nome" >{props.nome}</div>
                <div class="email" >{props.email}</div>
                <div class="mensagem" >{props.children}</div>
                <div class="data" >{props.data.toString()}</div>
                <button onClick={props.Remover} >&times;</button>
            </div>
        </div>
   )
}

export default Comentario
