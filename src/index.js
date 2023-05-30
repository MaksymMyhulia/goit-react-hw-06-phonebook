import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { theme } from './constants/theme.js';
import { ThemeProvider } from '@emotion/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <ThemeProvider theme={theme}>
        <App />
       </ThemeProvider>
     </PersistGate>
   </Provider>
  </React.StrictMode>
);
