import {generateName, generateRandomEmail} from "./dataGenerator";

type Gender = "male" | 'female'
type Status = 'active' | 'inactive'
type Params = 'name' | 'email' | 'gender' | 'status'

export interface UserValid {
    name: string
    email: string
    gender: Gender
    status: Status
}

export interface UserInvalid {
    name?: string
    email?: string
    gender?: Gender
    status?: Status
}

class User implements UserValid {
     name: string
     email: string
     gender: Gender
     status: Status

    addName(nameLength?: number) {
        this.name = generateName(nameLength)
    }

    addEmail(domain?: string, emailLength?: number) {
        this.email = generateRandomEmail(domain, emailLength)
    }

    addGender(genderType: Gender = 'male') {
        this.gender = genderType
    }

    addStatus(statusType: Status = 'active') {
        this.status = statusType
    }

    build() {
        return {
            name: this.name,
            email: this.email,
            gender: this.gender,
            status: this.status
        }
    }
}

export const generateValidUserData = () => {
    const user = new User()
    user.addName()
    user.addEmail()
    user.addGender()
    user.addStatus()

    return user.build()
}

export const generateDataWithMissingProp = (param: Params = 'name') => {
    const bodyData = generateValidUserData()
    delete bodyData[param]
    return bodyData
}

export const generateDataWithInvalidEmail = () => {
    const invalidDomain = 'not_valid'
    const user = new User()
    user.addName()
    user.addEmail(invalidDomain)
    user.addGender()
    user.addStatus()

    return user.build()
}