import { FastifyInstance, FastifyReply } from 'fastify'

const decorateReply = (fastify: FastifyInstance) => {
    Object.entries({
        sendError: function (this: FastifyReply, message: string) {
            this.code(400).send({
                statusCode: 400,
                error: 'Bad Request',
                message: message,
            })
        },
    }).forEach(([name, fn]) => {
        fastify.decorateReply(name, fn)
    })
}

export default decorateReply
