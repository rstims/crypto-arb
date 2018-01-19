import React from "react";
import styled from 'styled-components';
import FaMinus from 'react-icons/lib/fa/minus';

class Exchange extends React.Component{
  render() {
    return <StyledExchange>
      <Minus onClick={this.props.onRemove} /> 
    </StyledExchange>;
  }  
}  
export default Exchange;

const StyledExchange = styled.div`
  box-shadow: 0 0 5px 2px rgba(0,0,0,.15);
  width:200px;
  height:100%;
`;

const Minus = styled(FaMinus)`
  cursor: pointer;
`;
