import axios from "axios";
import * as config from "./config";

const instance = axios.create({
  //baseURL: "http://localhost:6789",
  //baseURL: "https://url-shortner09.herokuapp.com/",
  //baseURL: "http://server2.ishitw.me:6789",
  baseURL: "http://urlshort.ishitw.me:6789",
});

export default instance;
