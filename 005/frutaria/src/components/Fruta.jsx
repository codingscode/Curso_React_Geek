import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/frutas.action'


const Fruta = ({ fruta }) => {
   const dispatch = useDispatch()


   return (
      <div className="fruta">
         <ul>
            <li>
               <strong>Fruta:</strong> {fruta.nome}
            </li>
            <li>
               <strong>Quantidade:</strong> {fruta.quantidade}
            </li>
         </ul>
         <button onClick={() => dispatch(actions.remover(fruta))} >&times;</button>
      </div>
   )

}


export default Fruta

