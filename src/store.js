import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "./services/todosApi";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: { [todosApi.reducerPath]: todosApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);
