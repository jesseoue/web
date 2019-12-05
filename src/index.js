import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import * as Sentry from '@sentry/browser';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: 'https://78536326e6524916b6f44b4ea510b7a4@sentry.io/1846624',
  release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
