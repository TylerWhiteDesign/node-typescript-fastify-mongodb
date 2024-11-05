import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify'
import { ErrorCode } from '../lib/constants.js'

export default function authorize(
    request: FastifyRequest,
    reply: FastifyReply,
    done: HookHandlerDoneFunction
) {
    const token = request.headers['authorization']
    if (!token) {
        reply.sendError('No token provided', ErrorCode.INVALID_TOKEN)
    }
    done()
}
