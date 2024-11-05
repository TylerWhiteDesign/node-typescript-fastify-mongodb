import { ErrorCode } from './constants.js'

declare module 'fastify' {
    interface FastifyReply {
        sendError(message: string, errorCode?: ErrorCode): void
    }
}
