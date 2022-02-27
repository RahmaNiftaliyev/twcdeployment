import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/root/App';
import store from './app/store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'alertifyjs/build/css/alertify.min.css';
import 'animate.css/animate.min.css';
import 'animate.css';
import './index.css';

const rootElement = document.getElementById('root');

const renderer = () => {
  return {
    obj: ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      rootElement
    )
  };
};

renderer();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
