import {
    getUserById,
    createValidUser,
    updateExistingUser,
    deleteUser
} from "../api-client/businessFunctions";
import {generateValidUserData} from "../resources/user";
import {expect} from "chai";
import {
    DELETE_USER_SUCCESS_CODE,
    GET_USER_SUCCESS_CODE,
    POST_USER_SUCCESS_CODE} from "../resources/constans";

describe('CRUD operations', async () => {

    let USER_ID: string
    const newUserBodyData = generateValidUserData()
    const updatedUserBodyData = generateValidUserData()

    it('Creates new user with POST', async () => {
        const response = await createValidUser(newUserBodyData)

        USER_ID = response.data.id.toString()

        expect(response.status).equal(POST_USER_SUCCESS_CODE)
        expect(response.data).deep.include(newUserBodyData)
    })

    it('Reads user by ID with GET', async () => {
        const response = await getUserById(USER_ID)

        expect(response.status).equal(GET_USER_SUCCESS_CODE)
        expect(response.data).deep.include(newUserBodyData)
    })

    it('Updates the user', async () => {
        const response = await updateExistingUser(USER_ID, updatedUserBodyData)

        expect(response.status).equal(GET_USER_SUCCESS_CODE)
        expect(response.data).deep.include(updatedUserBodyData)
    })

    it('Deletes the user', async () => {
        const response = await deleteUser(USER_ID)
        expect(response.status).equal(DELETE_USER_SUCCESS_CODE)
    })
})