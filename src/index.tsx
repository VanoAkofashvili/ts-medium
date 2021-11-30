import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  rootElement
);
