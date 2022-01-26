// External Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Local Imports
// Services
import UsersDataService from "../../api-services/users-service";

import { RootState } from "../store/";

// Types
type User = {
  id: number;
  name: string;
};

type initialStateType = {
  users: User[];
};

// Initial State
const initialState: initialStateType = {
  users: [],
};

// Thunk Functions
export const fetchAsyncUsers = createAsyncThunk("fetchAsyncUsers", async () => {
  const response = await UsersDataService.getAll();
  const responseDataTasks = await response.data;
  return responseDataTasks;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncUsers.pending, (state, action) => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
    builder.addCase(fetchAsyncUsers.rejected, (state, action) => {
      console.log("Rejected!");
    });
  },
});

export const usersList = (state: RootState) => state.users;
export default usersSlice.reducer;
