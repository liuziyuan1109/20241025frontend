// src/api/user.js
import axios from "axios";

const API_BASE_URL = "http://120.46.194.106:28080"; // 后端服务地址

export async function register(username, password) {
  const res = await axios.post(`${API_BASE_URL}/users/register`, {
    username,
    password,
  });
  return res.data;
}

export async function login(username, password) {
  const res = await axios.post(`${API_BASE_URL}/users/login`, {
    username,
    password,
  });
  return res.data;
}
