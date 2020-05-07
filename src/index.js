import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/bootstrap-3.3.6-dist/css/bootstrap.css'
import './components/bootstrap-3.3.6-dist/css/bootstrap.min.css'
// import './components/css/font-awesome.css'
import './components/css/style.css'
import './components/css/style1.css'

ReactDOM.render(<App />,document.getElementById('root'));
serviceWorker.unregister();
