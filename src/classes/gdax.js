import Exchange from './exchange';
import GDAX from 'gdax';

export default class Gdax extends Exchange{ 

  constructor() {
    super(new GDAX.PublicClient()); 

    // this.client
    // .getProductTrades('BTC-USD')
    // .then(this.normalizeData)
    // .catch(error => console.log(error));
  }

  normalizeData(data) {
    console.log(data); 
  }
} 
