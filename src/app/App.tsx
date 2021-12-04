import { Routes, Route } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import { Login, Register, AuthLayout } from '../features/auth';
import { Navbar } from './components';
import { PrivateRoute } from '../common';

const App: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<div>main page</div>} />
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <main>User profile</main>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<main>SOmething wen wrong</main>} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
