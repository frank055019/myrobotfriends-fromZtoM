import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

import App from './containers/App';

ReactDOM.render(
		<App/>

, document.getElementById('root'));
serviceWorker.unregister();