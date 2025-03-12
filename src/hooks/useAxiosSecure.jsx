import axios from 'axios';
import React from 'react';


const axiosInstance = axios.create({
    baseURL: 'https://localhost:3000',
    withCredentials: true
});

const useAxiosSecure = () => {
    return axiosInstance
};

export default useAxiosSecure;