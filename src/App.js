import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="">Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))} className="rounded-full bg-aqua p-5">+</button>
      <button onClick={() => dispatch(decrement(3))} className="rounded-full bg-aqua p-5">-</button>
      {isLogged ? <h3>Valuable</h3> : ''}
    </div>
  );
}

export default App;
