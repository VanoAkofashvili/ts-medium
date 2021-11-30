import { Container } from '@chakra-ui/react';
import { Navbar } from './components';

const App: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
    </Container>
  );
};

export default App;
