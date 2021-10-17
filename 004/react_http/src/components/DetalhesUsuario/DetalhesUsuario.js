import React from 'react'
import { useParams } from 'react-router-dom'


function DetalhesUsuario() {

   const { id } = useParams()

   return (
      <>
         <h1>ID: {id}</h1>
      </>
   )
}

export default DetalhesUsuario




