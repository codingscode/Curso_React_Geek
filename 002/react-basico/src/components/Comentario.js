
import React from 'react'
import './Comentario.css'

const Comentario = (props) => {
   //props.nome = 'Simon'  // dá erro
   
   return (
        <div className="Comentario" >
            <div>{props.nome}</div>
            <div>{props.email}</div>
            <div>{props.children}</div>
            <div>{props.data.toString()}</div>
        </div>
   )
}

export default Comentario
