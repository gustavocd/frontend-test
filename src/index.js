import React from 'react';
import ReactDOM from 'react-dom';
import EmailClient from './EmailClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <EmailClient />
    </Provider>,
    document.getElementById('root')
);
