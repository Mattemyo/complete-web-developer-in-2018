import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import Hello from './Hello'

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
