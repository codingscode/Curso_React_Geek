import React from 'react'
import AdicionaFruta from './AdicionaFruta'
import Fruta from './Fruta'
import { useSelector } from 'react-redux'


const ListaFrutas = () => {

   const frutas = useSelector(state => state.frutaReducers.frutas)
   

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
