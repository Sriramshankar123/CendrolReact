import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import CSS styles
import App from './App'; // Import your main App component
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
