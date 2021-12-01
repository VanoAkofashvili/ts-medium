import { Container } from '@chakra-ui/react';
import { Navbar, Register } from './components';

const App: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Register />
    </Container>
  );
};

export default App;
