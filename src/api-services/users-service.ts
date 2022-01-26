import http from "./http-common";

export class UsersDataService {
  getAll() {
    return http.get("/users");
  }
}

export default new UsersDataService();
