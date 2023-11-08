const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const generateName = (localPartLength: number = 5) => {
    return generateRandomString(localPartLength)
}

export const generateRandomEmail = (
    domain: string = "test.com",
    localPartLength: number = 5): string => {
    const localPart = generateRandomString(localPartLength);
    return `${localPart}@${domain}`;
}