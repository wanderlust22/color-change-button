import React from 'react';
import './App.css';
import BoxContainer from './containers/BoxContainer';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';

 export let store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
        <BoxContainer />
    </div>
  );
}

export default App;
