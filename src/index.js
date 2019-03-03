import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import finderReducer from "./store/reducers/finder";

const rootReducer = combineReducers({
    finder: finderReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
