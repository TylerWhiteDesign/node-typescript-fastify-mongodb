import { FastifyInstance, RouteShorthandOptions, FastifyRequest } from 'fastify'
import authorize from '../../middleware/authorize.js'
import createOne from '../../controllers/api/colors/createOne.js'
import { IColor } from '../../models/index.js'

const postOpts: RouteShorthandOptions = {
    schema: {
        body: {
            type: 'object',
            properties: {
                value: { type: 'string' },
            },
            required: ['value'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    result: {
                        type: 'object',
                        properties: {
                            value: { type: 'string' },
                            _id: { type: 'string' },
                        },
                        required: ['value'],
                    },
                },
                required: ['result'],
            },
        },
    },
    preValidation: authorize,
}

export default function (fastify: FastifyInstance) {
    fastify.post('/color', postOpts, async (request: FastifyRequest) => {
        const object = request.body as IColor
        const color = await createOne(object)

        return { result: color }
    })
}
