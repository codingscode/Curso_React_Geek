
import React from 'react'
import './Comentario.css'

const Comentario = () => {
   const numero1 = 6
   const numero2 = 10

   return (
        <div className="Comentario" >
            <div>Olá eu sou um componente</div>
            <div>soma 2 + 3: {2 + 3}</div>
            <div>numero1 + numero2: {numero1 + numero2}</div>
        </div>
   )
}

export default Comentario
