import { configureStore } from '@reduxjs/toolkit'
import usersReduser from './usersReduser';
import userReduser from './userReduser';
import { loggerMiddleWare } from './loggerMiddleWare';

const store = configureStore({
    reducer: { users: usersReduser ,  user: userReduser},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
})


export default store;