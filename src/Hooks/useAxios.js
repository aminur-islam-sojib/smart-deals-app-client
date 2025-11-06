import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
