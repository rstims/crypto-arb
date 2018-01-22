import uuidv4 from 'uuid/v4';
import exchanges from '../../classes/exchanges';

const ADD_EXCHANGE = 'ADD_EXCHANGE';
const REMOVE_EXCHANGE = 'REMOVE_EXCHANGE';

const initialState = {
  exchanges: [],  
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_EXCHANGE:
      const id = uuidv4(); 
      return {
        ...state,
        exchanges: state.exchanges.concat([{
          id,
          exchangeOptions: exchanges.map(ex => ex.name)
        }]), 
      };
    case REMOVE_EXCHANGE:
    console.log(1);
      return {
        ...state,
        exchanges: state.exchanges.filter(ex => ex.id !== action.id),
      };
    default:
      return state;
  }
};

export const addExchange = () => ({
  type: ADD_EXCHANGE
}); 

export const removeExchange = id => ({
  type: REMOVE_EXCHANGE,
  id
}); 

