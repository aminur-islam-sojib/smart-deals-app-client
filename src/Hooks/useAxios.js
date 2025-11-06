import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_API_KEY,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
