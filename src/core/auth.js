import axios from "axios";
import { API_BASE_URL } from './config';

export const login = async (email, password) => {
    return axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password
    });
}

export const register = async (email, password, confirm_password) => {
    return axios.post(`${API_BASE_URL}/auth/register`, {
        email,
        password,
        confirm_password
    });
}