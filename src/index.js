import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';
import menuReducer from './store/reducers/menu'

const rootReducer = combineReducers({
    menu: menuReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
