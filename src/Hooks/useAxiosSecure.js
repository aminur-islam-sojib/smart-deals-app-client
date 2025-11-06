import axios from "axios";
import React from "react";

const instanceSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

const useAxiosSecure = () => {
  instanceSecure.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("access-token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );

  return instanceSecure;
};

export default useAxiosSecure;
