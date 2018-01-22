import React, { Component } from 'react';
import ReactGridLayout from "react-grid-layout";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  addExchange, 
  removeExchange, 
} from './redux/reducers/dashboardReducer';
import { injectGlobal } from 'styled-components';
import Exchange from './components/exchange';
import FaPlus from 'react-icons/lib/fa/plus';
import { get } from 'lodash';

injectGlobal`
  body{
    background: #333b44;
  }
`;

class App extends Component {

  render() {
    const exchanges = this.props.exchanges.map((ex, i) => (
      <div 
        key={i} 
        data-grid={{
          x:(this.props.exchanges.length * 2) % 12,
          y:Infinity,
          w:2,
          h:2,
        }}
      >
        <Exchange
          exchange={ex}
          onRemove={this.props.actions.removeExchange}
        />
      </div> ));

      return ( <div>
        <button onClick={this.props.actions.addExchange}>Add Card</button>
        <ReactGridLayout
          cols={12}
          width={1200}
          rowHeight={100}
          isResizable={true}
        >
          {exchanges}
        </ReactGridLayout>
      </div> );
  }
}

const mapStateToProps = state => ({
  exchanges: state.dashboard.exchanges,
  layout: state.dashboard.layout,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    addExchange,
    removeExchange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
