import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../common';
import { Layout } from '../components';
import { PrivateRoute } from '../components/private-route';
import {
  useGetCurrentUserMutation,
  useGetPostsAllQuery,
} from '../features/api';
import { Login, Register } from '../features/auth';
import { PostsList } from '../features/posts';
import { RoutePaths as _ } from './constants';

const Main = () => {
  const { data: posts } = useGetPostsAllQuery();
  return (
    <main>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
};
const App: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [getCurrentUser] = useGetCurrentUserMutation();

  // useEffect(() => {
  //   console.log('useEffect');
  //   if (isAuthenticated) {
  //     getCurrentUser();
  //   }
  // }, [isAuthenticated, getCurrentUser]);

  return (
    <Routes>
      <Route path={_.home} element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
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
