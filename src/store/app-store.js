import { configureStore } from "@reduxjs/toolkit";

import statusReducer from './status';
import envReducer from './env';

const appStore = configureStore({
    reducer: {status: statusReducer, env: envReducer},
});

export default appStore;