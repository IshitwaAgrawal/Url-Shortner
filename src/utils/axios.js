import axios from "axios";
import * as config from "./config";

const instance = axios.create({
  baseURL: "http://localhost:80",
  // baseURL: "https://url-shortner09.herokuapp.com/",
});

export default instance;
