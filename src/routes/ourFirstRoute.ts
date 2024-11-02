import { FastifyInstance } from 'fastify'

function routes(fastify: FastifyInstance) {
    fastify.get('/', () => {
        return { hello: 'world3' }
    })
}

export default routes
