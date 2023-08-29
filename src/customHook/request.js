// <============Dymanic APi Request========>

import axios from "axios";
import { base_url } from "../api/api";
const instance = axios.create({
  baseURL: base_url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const performRequest = async (method, data = {}) => {
  try {
    console.log(method, "me");
    const res = await instance({
      method: method,
      url: base_url, // Make sure the URL is correctly formed
      data: data,
    });

    const val = res.data.data;

    let response = JSON.parse(val);
    return response;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

//   <------performRequest callback------>
export const request = async (method, data = {}) => {
  return performRequest(method, data);
};
