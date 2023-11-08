import {createInvalidUser, createValidUser, deleteUser} from "../api-client/businessFunctions";
import {generateDataWithInvalidEmail, generateDataWithMissingProp, generateValidUserData} from "../resources/user";
import {expect} from "chai";
import {
    ALREADY_TAKEN_EMAIL_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    INVALID_USER__BODY_DATA_CODE,
    MISSED_PROPERTY_MESSAGE,
    Properties
} from "../resources/constans";

describe('Negative cases', () => {
    it('Create user with missing NAME property', async () => {
        const missingProperty = Properties.name
        const userDataWithoutNameProp = generateDataWithMissingProp(missingProperty)

        try {
            await createInvalidUser(userDataWithoutNameProp)
        } catch (error) {
            expect(error.response.status).equal(INVALID_USER__BODY_DATA_CODE)
            expect(error.response.data[0].field).equal(missingProperty)
            expect(error.response.data[0].message).equal(MISSED_PROPERTY_MESSAGE)
        }
    })

    it('Create user with invalid email', async () => {
        const userDataWithInvalidEmail = generateDataWithInvalidEmail()

        try {
            await createValidUser(userDataWithInvalidEmail)
        } catch (error) {
            expect(error.response.status).equal(INVALID_USER__BODY_DATA_CODE)
            expect(error.response.data[0].field).equal(Properties.email)
            expect(error.response.data[0].message).equal(INVALID_EMAIL_MESSAGE)
        }
    })

    it('Create user with already taken email', async () => {
        const newUserBodyData = generateValidUserData()
        const response = await createValidUser(newUserBodyData)

        try {
            await createValidUser(newUserBodyData)
        } catch (error) {
            expect(error.response.status).equal(INVALID_USER__BODY_DATA_CODE)
            expect(error.response.data[0].field).equal(Properties.email)
            expect(error.response.data[0].message).equal(ALREADY_TAKEN_EMAIL_MESSAGE)
        } finally {
            await deleteUser(response.data.id.toString())
        }
    })
})