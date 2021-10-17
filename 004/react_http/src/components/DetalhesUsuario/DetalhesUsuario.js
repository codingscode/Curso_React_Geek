import React from 'react'
import { Link, useParams } from 'react-router-dom'


function DetalhesUsuario() {

   const { id } = useParams()

   return (
      <>
         <h1>ID: {id}</h1>
         <Link to="/usuarios" >Voltar</Link>
      </>
   )
}

export default DetalhesUsuario




