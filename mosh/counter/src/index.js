import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Counters from './components/counters'
import "bootstrap/dist/css/bootstrap.css"
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
