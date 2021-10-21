
import { actionsTypes } from '../constants/frutas'


const INITIAL_STATE = {

   frutas: [
      {id: 1, nome: 'laranja', quantidade: 5},
      {id: 2, nome: 'graviola', quantidade: 8},      
   ]
}


const reducers = (state = INITIAL_STATE, action) => {

   switch (action.type) {
      case actionsTypes.ADICIONAR_FRUTA:
         return { frutas: [...state.frutas, {...action.payload}] }
      case actionsTypes.REMOVER_FRUTA:
         return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
      default:
         return state
   }  
}


export { reducers }


