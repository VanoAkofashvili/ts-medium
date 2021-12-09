import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components';
import { PrivateRoute } from '../components/private-route';
import { Login, Register } from '../features/auth';
import { PostsList } from '../features/posts';
import { RoutePaths as _ } from './routes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={_.home} element={<Layout />}>
        <Route path={_.login} element={<Login />} />
        <Route path={_.register} element={<Register />} />
        <Route
          path={_.protected}
          element={
            <PrivateRoute>
              <PostsList />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
