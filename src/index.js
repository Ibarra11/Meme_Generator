import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); 
ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducer)}>
    <App />
</Provider>
, document.getElementById('root'));
// registerServiceWorker();
