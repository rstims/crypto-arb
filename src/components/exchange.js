import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  exchangeChange, 
} from '../redux/reducers/exchangeReducer';
import { default as ExchangeView } from '../views/exchange';

class Exchange extends React.Component{

  onRemove = id => (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onRemove(id)
  }

  render() {
    return <ExchangeView 
      {...this.props}
      onRemove={this.onRemove(this.props.exchange.id)} 
    />;
  }  
}  

const mapStateToProps = state => ({
  exchangeValue: state.exchange.exchange,
  currentPair: state.exchange.currentPair,
  pairs: state.exchange.pairs,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    exchangeChange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
