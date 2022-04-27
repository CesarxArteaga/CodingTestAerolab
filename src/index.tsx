import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//fonst
import './assets/fonts/Montserrat-Black.ttf';
import './assets/fonts/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat-Medium.ttf';
import './assets/fonts/Montserrat-Regular.ttf';
import './assets/fonts/Montserrat-Light.ttf';

import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
