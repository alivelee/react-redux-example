import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import { createStore } from 'redux';
import counter from './reducers';

const store = createStore(counter);
function render(){
  ReactDOM.render(
    <Counter
      value = {store.getState()}
      onDecrement = { () => store.dispatch({ type:'DECREMENT'})}
      onIncrement = { () => store.dispatch({ type:'INCREMENT'})}
    />,
    document.getElementById('root')
  );
}
render();
store.subscribe(render);
