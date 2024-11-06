import { FastifyInstance } from 'fastify'

const routes = function (fastify: FastifyInstance) {
    Object.values({
        get: import('./get.js'),
        post: import('./post.js'),
    }).forEach((route) => {
        fastify.register(route)
    })
}

export { routes }
export * from './schemas.js'
