import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_baseurl}`,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  
  axiosInstance.interceptors.request.use((config) => {
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
  
  );

  return axiosInstance;
};

export default useAxiosSecure;
