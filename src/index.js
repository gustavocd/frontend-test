import React from 'react';
import ReactDOM from 'react-dom';
import EmailClient from './EmailClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <EmailClient />
    </Provider>,
    document.getElementById('root')
);
