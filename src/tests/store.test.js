import { store } from "../redux/store/";

describe("Tasks redux state test", () => {
  it("Should initially set tasks to an empty array", () => {
    const state = store.getState().tasks;

    expect(state.tasks).toEqual([]);
  });
});
