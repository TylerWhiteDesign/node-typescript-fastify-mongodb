import { FastifyInstance } from 'fastify'

export default function (fastify: FastifyInstance) {
    Object.values({
        get: import('./get.js'),
        post: import('./post.js'),
    }).forEach((route) => {
        fastify.register(route)
    })
}
