import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import '../public/style.css';

ReactDOM.render(
    <Provider store={store}>
        <div>Hello, World!</div>
    </Provider>,
    document.getElementById('app')
)
