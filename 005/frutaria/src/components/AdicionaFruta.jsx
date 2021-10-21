import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'



const AdicionaFruta = () => {

   const [nome, setNome] = useState('')
   const [quantidade, setQuantidade] = useState(0)
   
   const dispatch = useDispatch()
   
   const adicionarFruta = evento => {
   
      evento.preventDefault()
      const fruta = {
         id: new Date(), nome, quantidade
      }
      
      console.log(`Adicionar Fruta`, fruta)
      
      dispatch(actions.adicionar(fruta))
   }
   
   return (
   
      <form onSubmit={adicionarFruta} >
         <input type="text" name={nome} placeholder="Fruta" required onChange={evento => setNome(evento.target.value)} />
         <input type="number" name={quantidade} placeholder="Quantidade" required onChange={evento => setQuantidade(evento.target.value)} />         
         <button type="submit" >Adicionar</button>
      </form>
   )
   
   

}


export default AdicionaFruta


