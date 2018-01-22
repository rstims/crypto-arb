import exchanges from '../../classes/exchanges';

const EXCHANGE_CHANGE = 'EXCHANGE_CHANGE';

const initialState = {
  exchange: '',  
  pairs: [],
  currentPair: '',
}

export default (state = initialState, action) => {
  switch(action.type){
    case EXCHANGE_CHANGE:
      console.log(action.pairs);
      return {
        ...state,
        exchange: action.value, 
        pairs: action.pairs,
      };
    default:
      return state;
  }
};

export const doExchangeChange = (e, pairs) => ({
  type: EXCHANGE_CHANGE,
  value: e.value, 
  pairs
}); 

export const exchangeChange = e => {
  return dispatch => exchanges
  .find(ex => ex.name === e.value)
  .getPairs()
  .then(pairs => dispatch(doExchangeChange(e, pairs)))
}

