import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './Reducer/RootReducer'
import './index.css';
import App from './App';

const store =createStore(reducer);
console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
