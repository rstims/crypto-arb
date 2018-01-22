import React from "react";
import styled from 'styled-components';
import FaMinus from 'react-icons/lib/fa/minus';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Exchange extends React.Component{
  render() {
    return <StyledExchange>
      <StyledSelect
        name='exchange'
        value={this.props.exchangeValue}
        onChange={this.props.actions.exchangeChange}
        options={this.props.exchange.exchangeOptions.map(op => ({ value: op.name, label: op.name }))}
      />
      {this.props.pairs && <StyledPairsSelect
        name='exchange'
        value={this.props.currentPair}
        onChange={this.props.actions.exchangeChange}
        options={this.props.pairs}
      />}
      <StyledRemove onClick={this.props.onRemove}>
        <Minus />
      </StyledRemove> 
    </StyledExchange>;
  }  
}  
export default Exchange;

const StyledRemove = styled.span`
  color: #ef5350;
  float:right;
`;

const StyledSelect = styled(Select)`
 display:inline-block;
 width:70%;
 float:left;
 .Select-control{
   background-color:#333b44; 
   border-radius: 0;
 }
`;

const StyledPairsSelect = styled(Select)`
 .Select-control{
   background-color:#333b44; 
   border-radius: 0;
 }
`;

const StyledExchange = styled.div`
  background: #364049;
  padding:10px;
  width:200px;
  height:100%;
`;

const Minus = styled(FaMinus)`
  cursor: pointer;
`;
