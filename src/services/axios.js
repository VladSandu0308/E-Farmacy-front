import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:80/",
  timeout: 4000
})