import axios from "axios";
import {BASE_URL} from "./api-data";
import * as dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.USER_TOKEN
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
});

export const getApi = async (route: string) => {
    return await instance.get(route)
}

export const postApi = async (body: object) => {
    return await instance.post('/', body)
}

export const putApi = async (userId: string, body: object) => {
    return await instance.put(userId, body)
}

export const deleteApi = async (userId: string) => {
    return await instance.delete(userId)
}