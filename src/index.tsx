import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { store } from './app/store';
import theme from './app/theme';

import { loggedIn } from './features/auth';

import './app/theme/styles.css';

const rootElement = document.getElementById('root');

// Check for token and update app state if required
if (localStorage.getItem('access_token')) {
  store.dispatch(loggedIn());
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
