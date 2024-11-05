import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify'

function authorize(
    request: FastifyRequest,
    reply: FastifyReply,
    done: HookHandlerDoneFunction
) {
    const token = request.headers['authorization']
    if (!token) {
        reply.sendError('error message')
    }
    done()
}

export default authorize
