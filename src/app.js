import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addData } from './actions/data';
import data from './staticData/data';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';


const store = configureStore(); // 把configureStore return的東西 存到store

store.dispatch(addData(data));

// eslint-disable-next-line no-unused-vars
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
