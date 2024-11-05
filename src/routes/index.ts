import { FastifyInstance, RouteShorthandOptions, FastifyRequest } from 'fastify'
import authorize from '../middleware/authorize.js'

const getOpts: RouteShorthandOptions = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                color: { type: 'string' },
            },
            required: ['color'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' },
                },
                required: ['hello'],
            },
        },
    },
    preValidation: authorize,
}

const postOpts: RouteShorthandOptions = {
    schema: {
        body: {
            type: 'object',
            properties: {
                color: { type: 'string' },
            },
            required: ['color'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' },
                },
                required: ['hello'],
            },
        },
    },
    preValidation: authorize,
}

function routes(fastify: FastifyInstance) {
    fastify.get('/', getOpts, (request: FastifyRequest) => {
        const query = request.query as { color: string }
        return { hello: query.color }
    })

    fastify.post('/', postOpts, (request: FastifyRequest) => {
        const body = request.body as { color: string }
        return { hello: body.color }
    })
}

export default routes
