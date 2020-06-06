import axios from "axios";
import { BASE_URL } from "../config/AppSettings";

const instance = axios.create({
  baseURL:  BASE_URL,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default instance;