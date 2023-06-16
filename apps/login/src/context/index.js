import axios from "axios";
import { ApiContext } from "./context";

export const ApiProvider = ({ children }) => {
  const baseURL = "http://localhost:3000";

  const axiosInstance = axios.create({
    baseURL,
  });

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data.user));

      return response.data.user;
    } catch (error) {
      throw new Error("Login failed. Please try again.");
    }
  };

  const api = {
    login,
  };

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
