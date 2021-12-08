import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { MainLayout, AuthLayout } from '../components';
import { Login } from '../features/auth';

const App: React.FC = () => {
  const token = localStorage.getItem('access_token');

  return (
    <Container maxW="container.xl" p={0}>
      <Routes>
        <Route path="/" element={token ? <MainLayout /> : <AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
