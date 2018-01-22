import Exchange from './exchange';
import Bluebird from 'bluebird';
import GDAX from 'gdax';

export default class Gdax extends Exchange{ 

  name = 'GDAX'

  constructor() {
    super(new GDAX.PublicClient()); 
  }

  normalizeData(data) {
    console.log(data);
    const normalize = datum => ({ label: `${datum.base_currency}/${datum.quote_currency}`, value: datum.id });
    return Bluebird.resolve(data.map(normalize)); 
  }

  getPairs() {
    return this.client
    .getProducts()
    .then(this.normalizeData)
    .catch(error => console.log(error));
  }
} 
