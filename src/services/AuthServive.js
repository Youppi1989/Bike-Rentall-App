import $api from "../http";

export const clientId = "bff396d9-12dc-4ca9-87a4-eda59e8d247f";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/auth/sign_in", { email, password });
  }

  static async registration(email, password, firstName, lastName) {
    return $api.post("/auth/sign_up", {
      email,
      password,
      clientId,
      firstName,
      lastName,
    });
  }

  static async checkAuth() {
    return $api.get("/auth");
  }
}
