import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Local Imports
// Services
import TodosDataService from "../../api-services/todos-service";

import { RootState } from "../store/";

import { TaskType } from "../../types/types";

type initialStateType = {
  tasks: TaskType[];
};

// Initial State
const initialState: initialStateType = {
  tasks: [],
};

// Thunk Functions
export const fetchAsyncTasks = createAsyncThunk("fetchAsyncTasks", async () => {
  const response = await TodosDataService.getAll();
  const responseDataTasks = await response.data;
  return responseDataTasks;
});
export const updateAsyncTasks = createAsyncThunk(
  "updateAsyncTasks",
  async (patchingData: { id: number; data: { completed: boolean } }) => {
    const { id, data } = patchingData;
    const response = await TodosDataService.updateSingleTask(id, data);
    const responseUpdatedTasks = await response.data;
    return responseUpdatedTasks;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncTasks.pending, (state, action) => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
    });
    builder.addCase(fetchAsyncTasks.rejected, (state, action) => {
      console.log("Rejected!");
    });
    builder.addCase(updateAsyncTasks.pending, (state, action) => {
      console.log("Pending");
    });
    builder.addCase(updateAsyncTasks.fulfilled, (state, { payload }) => {
      const taskId = payload.id;

      state.tasks[taskId - 1].completed = true;
    });
    builder.addCase(updateAsyncTasks.rejected, (state, action) => {
      console.log("Rejected!");
    });
  },
});

export const tasksList = (state: RootState) => state.tasks;
export default tasksSlice.reducer;
