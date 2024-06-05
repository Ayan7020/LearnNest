import axios from 'axios';
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWTTOKENTYPE } from "@repo/types/TokenType"

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "Nothing Here";  

const api = axios.create({
    baseURL: BACKEND,
});

api.interceptors.request.use(async (config) => {
    try {
        const res = await axios.get('/api/getToken');
        const token = res.data;
        const decode = jwt.decode(token.split(' ')[1]) as JWTTOKENTYPE  
        const id = decode.user.id
        if (token) {
            config.headers['Authorization'] = token;
            config.headers['id'] = id;
        }
    } catch (error) {
        console.error("Error fetching JWT token:", error);
    }
    return config;
}, (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
});

export default api;
