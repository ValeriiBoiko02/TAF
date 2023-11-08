import {deleteApi, getApi, postApi, putApi} from "./api-client";
import {UserValid, UserInvalid} from "../resources/user";

export const getUserById = async (userId: string) => {
    return await getApi(userId)
}

export const createValidUser = async (body: UserValid) => {
    return await postApi(body)
}

export const createInvalidUser = async (body: UserInvalid) => {
    return await postApi(body)
}

export const updateExistingUser = async (userId: string, body: UserValid) => {
    return await putApi(userId, body)
}

export const deleteUser = async (userId: string) => {
    return await deleteApi(userId)
}