import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { store } from './app/store';
import theme from './app/theme';

import './app/theme/styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  rootElement
);
