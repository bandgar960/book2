import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const devEnvironment = process.env.NODE_ENV === 'development';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
export default new Commerce(
    checAPIKey,
    devEnvironment,
    commerceConfig,
  );
