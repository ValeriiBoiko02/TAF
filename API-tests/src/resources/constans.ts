export const POST_USER_SUCCESS_CODE = 201
export const GET_USER_SUCCESS_CODE = 200
export const DELETE_USER_SUCCESS_CODE = 204
export const INVALID_USER__BODY_DATA_CODE = 422

export enum Properties {
    name = "name",
    email = "email",
    gender = "gender",
    status = "status"
}

export const MISSED_PROPERTY_MESSAGE = "can't be blank"
export const INVALID_EMAIL_MESSAGE = "is invalid"
export const ALREADY_TAKEN_EMAIL_MESSAGE = "has already been taken"