import { Container } from '@chakra-ui/react';
import { Navbar, Register, Login } from './components';
import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
const App: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<main>SOmething wen wrong</main>} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
