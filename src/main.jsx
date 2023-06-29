import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { persistStore }from 'redux-persist';
import { Provider } from 'react-redux';
import { store } from './app/store.js'
// import store from './store/store.js';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider>
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
