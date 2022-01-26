// External Imports
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import usersReducer from "../slices/usersSlice";
import tasksReducer from "../slices/tasksSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
