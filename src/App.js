import React, { Component } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExchange, removeExchange } from './redux/reducers/dashboardReducer';
import styled from 'styled-components';
import Exchange from './components/exchange';
import FaPlus from 'react-icons/lib/fa/plus';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class App extends Component {

  render() {
    const exchanges = this.props.exchanges.map((ex, i) => ( 
    <div key={i + 1} data-grid={i + 1}>
      <Exchange 
        exchange={ex} 
        onRemove={this.props.actions.removeExchange}
      />
    </div> ));

    const layout = this.props.exchanges.map((ex, i, l) => ({
      i: i + 1,
      x: (l.length * 2) % 4,
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2
    })).concat({i:this.props.exchanges.length});

    return ( <ResponsiveReactGridLayout 
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}
      layout={layout} 
      width={1200} 
    >
      {exchanges}
      <AddExchange 
	onClick={this.props.actions.addExchange} 
	key={this.props.exchanges.length + 1}
      > 
      <AddWrap>
	<FaPlus /><br /> 
	Add Exchange
      </AddWrap>
    </AddExchange>
  </ResponsiveReactGridLayout> );
  }
}

const mapStateToProps = state => ({
  exchanges: state.dashboard.exchanges
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ 
    addExchange, 
    removeExchange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const AddExchange = styled.div`
  cursor: pointer; 
  box-shadow: 0 0 5px 2px rgba(0,0,0,.15);
  align-items: center;
  justify-content: center;
  display:flex;
  flex-direction: column;
`;

const AddWrap = styled.div`
  text-align:center; 
  color: lightgrey;
`;
