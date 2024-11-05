import { FastifyInstance } from 'fastify'

export default function register(fastify: FastifyInstance) {
    Object.values({
        colors: import('./colors/index.js'),
    }).forEach((route) => {
        fastify.register(route)
    })
}
