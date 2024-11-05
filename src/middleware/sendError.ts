import { FastifyReply } from 'fastify'
import { ErrorCode } from '../lib/constants.js'

export default function (
    this: FastifyReply,
    message: string,
    code?: ErrorCode
) {
    const errorCode = code ?? ErrorCode.UNKNOWN_ERROR
    let statusCode: number
    switch (errorCode) {
        case ErrorCode.INVALID_TOKEN:
            statusCode = 401
            break
        case ErrorCode.UNAUTHORIZED:
            statusCode = 401
            break
        case ErrorCode.NOT_FOUND:
            statusCode = 404
            break
        default:
            statusCode = 500
    }

    this.code(statusCode).send({
        statusCode: statusCode,
        errorCode: errorCode,
        error: ErrorCode[errorCode],
        message: message,
    })
}
