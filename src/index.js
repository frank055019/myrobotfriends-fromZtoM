import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore,applyMiddleware,combineReducers} from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';
import {searchRobots,requestRobots} from "./reducer.js";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import App from './containers/App';

const logger = createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer ,
	applyMiddleware(thunkMiddleware , logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
