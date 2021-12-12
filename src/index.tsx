import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { store } from './app/store';
import theme from './app/theme';

import { autoLogin } from './features/auth';

import { ACCESS_TOKEN } from './app/constants';

import './app/theme/styles.css';

const rootElement = document.getElementById('root');

// Check for token and update app state
if (localStorage.getItem(ACCESS_TOKEN)) {
  console.log('index.js');
  store.dispatch(autoLogin(localStorage.getItem(ACCESS_TOKEN) as string));
}

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  rootElement,
);
