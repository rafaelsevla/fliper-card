import React from 'react';
import ReactDOM from 'react-dom';
import client from 'service/api-client';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import GlobalStyle from './global-style';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
