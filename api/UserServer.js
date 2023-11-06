import { AxiosInstance } from "./AxiosInstance";

export const Register = async(email, password) => {
  const body = {
    email: email,
    password: password
  }
  const response = await AxiosInstance().post('user/register', body)
  return response
}

export const Login = async(email, password) => {
  const body = {
    email: email,
    password: password
  }
  const response = await AxiosInstance().post('auth/login', body)
  return response
}