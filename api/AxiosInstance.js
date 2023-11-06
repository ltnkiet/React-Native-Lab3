import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const customAxios = (contentType = "application/json") => {
  const instance = axios.create({
    baseURL: "https://fpoly-hcm.herokuapp.com/",
  });
  axiosIntance.instance.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem(token);
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": contentType,
      };
      return config;
    },
    (err) => Promise.reject(err)
  );
  axiosInstance.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err)
  ); // callback
  return axiosInstance;
};

export default customAxios
