import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme';
import './theme/styles.css';
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
  rootElement
);
