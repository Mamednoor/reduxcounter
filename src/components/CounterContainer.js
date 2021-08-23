import React from 'react';
import { connect } from 'react-redux';

const CounterComponent = ({counter, dispatch}) => {
  return(
      <div>
        <p> { counter }</p>
        <p>Counter</p>
        <button onClick = {() => dispatch ({type: "REMOVE10"})}>- 10</button>
        <button onClick = {() => dispatch ({type: "REMOVE1"})}>- 1</button>
        <button onClick = {() => dispatch ({type: "RESET"})}>RESET</button>
        <button onClick = {() => dispatch ({type: "ADD1"})}>+ 1</button>
        <button onClick = {() => dispatch ({type: "ADD10"})}>+ 10</button>    
      </div>
  );
}

const mapStateToProps = state =>({counter: state});
const CounterContainer = connect(mapStateToProps)(CounterComponent); 
export default CounterContainer;