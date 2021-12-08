import { Routes, Route } from 'react-router-dom';
import { MainLayout, AuthLayout } from '../components';
import { Login, Register } from '../features/auth';

const App: React.FC = () => {
  const token = localStorage.getItem('access_token');

  return (
    <Routes>
      <Route path="/" element={token ? <MainLayout /> : <AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
