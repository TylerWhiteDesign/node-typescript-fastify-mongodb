import { FastifyInstance } from 'fastify'

export default function (fastify: FastifyInstance) {
    Object.values({
        colors: import('./colors/index.js'),
    }).forEach((route) => {
        fastify.register(route)
    })
}
