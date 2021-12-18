// counterContainer.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  light: state
});
const CounterComponent = ({ counter, dispatch }) =>
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: 'SWITCH'})}>
      switch
    </button>
    <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
		<button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
		<button onClick={() => dispatch({ type: 'INCREMENTBY10'})}>Add 10</button>
		<button onClick={() => dispatch({ type: 'DECREMENTBY10'})}>Remove 10</button>
		<button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
  </div>;
export default connect(mapStateToProps)(CounterComponent);