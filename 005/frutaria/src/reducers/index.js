
import { combineReducers } from 'redux'
import { reducers as frutaReducers } from './frutas.reducer'


const reducers = combineReducers({
   frutaReducers,
})


export { reducers }

