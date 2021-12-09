import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { store } from './app/store';
import theme from './app/theme';

import { loggedIn } from './features/auth';

import { ACCESS_TOKEN } from './app/constants';

import './app/theme/styles.css';

const rootElement = document.getElementById('root');

// Check for token and update app state if required
if (localStorage.getItem(ACCESS_TOKEN)) {
  store.dispatch(loggedIn(localStorage.getItem(ACCESS_TOKEN)));
}

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  rootElement
);
