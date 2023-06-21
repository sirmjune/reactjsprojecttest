import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api';

const store = configureStore({
    reducer: {
        api: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
