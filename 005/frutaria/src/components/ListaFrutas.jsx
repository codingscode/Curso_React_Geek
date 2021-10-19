import React from 'react'
import AdicionaFruta from './AdicionaFruta'
import Fruta from './Fruta'



const ListaFrutas = () => {

   const frutas = [
      {id: 1, nome: 'Abacaxi', quantidade: 5},
      {id: 2, nome: 'laranja', quantidade: 12},   
   ]

   return (
   
      <>
         <h1>Lista de Frutas</h1>
         <AdicionaFruta />
         {frutas.map(cada => (
            <Fruta key={cada.id} fruta={cada} />
         ))}
      </>
   )

}

export default ListaFrutas
