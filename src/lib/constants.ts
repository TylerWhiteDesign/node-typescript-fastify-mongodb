export const Env = Object.freeze({
    environment: process.env.NODE_ENV,
    mongoDBUri: process.env.MONGODB_URI,
})

export enum ErrorCode {
    UNKNOWN_ERROR = 0,
    INVALID_TOKEN = 1,
    UNAUTHORIZED = 2,
    NOT_FOUND = 3,
}
