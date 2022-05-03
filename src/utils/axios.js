import axios from "axios";
import * as config from "./config";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://url-shortner09.herokuapp.com/",
});

export default instance;
