import uuidv4 from 'uuid/v4';

const ADD_EXCHANGE = 'ADD_EXCHANGE';
const REMOVE_EXCHANGE = 'REMOVE_EXCHANGE';

const initialState = {
  exchanges: [],  
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_EXCHANGE:
      return {
        exchanges: state.exchanges.concat([{
          id: uuidv4() 
        }]) 
      };
    case REMOVE_EXCHANGE:
      return {
        exchanges: state.exchanges.filter(ex => ex.id !== action.id) 
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
