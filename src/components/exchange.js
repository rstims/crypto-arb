import React from 'react';
import { default as ExchangeView } from '../views/exchange';

export default class Exchange extends React.Component{
  onRemove = id => () => this.props.onRemove(id)

  render() {
    return <ExchangeView 
      {...this.props}
      onRemove={this.onRemove(this.props.exchange.id)} 
    />;
  }  
}  

