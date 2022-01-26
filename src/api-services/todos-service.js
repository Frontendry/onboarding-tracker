import http from "./http-common";

export class TodosDataService {
  getAll() {
    return http.get("/todos");
  }

  updateSingleTask(id, data) {
    return http.patch(`/todos/${id}`, data);
  }
}

export default new TodosDataService();
