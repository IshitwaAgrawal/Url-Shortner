import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { HashRouter } from 'react-router-dom';
import './style.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './utils/reducer';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
,document.querySelector('#root'));