// import { Middleware } from '@reduxjs/toolkit';
// import { ACCESS_TOKEN } from '../../app/constants';
// import { autoLogin } from '../../features/auth';

// export const autoLoginMiddleware: Middleware =
//   (store) => (next) => (action) => {
//     const accessToken = localStorage.getItem(ACCESS_TOKEN);
//     if (action.type === autoLogin.toString() && accessToken) {
//       //@ts-ignore
//       store.dispatch(autoLogin(accessToken));
//     } else {
//       next(action);
//     }
//   };

// export default autoLoginMiddleware;
export {};
