import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// root Saga
import rootSaga from './redux/saga/rootSaga';
// redux persit
import { persistor, sagaMiddleware } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
