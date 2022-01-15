import axios from "axios";
import * as config from "./config";

const instance = axios.create({
  baseURL: `${config.url}:${config.port}`,
});

export default instance;
