import { FastifyInstance, RouteShorthandOptions, FastifyRequest } from 'fastify'
import authorize from '../../middleware/authorize.js'
import listMany from '../../controllers/api/colors/listMany.js'
import { IColor } from '../../models/index.js'

const getOpts: RouteShorthandOptions = {
    schema: {
        querystring: {
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
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                value: { type: 'string' },
                                _id: { type: 'string' },
                            },
                            required: ['value'],
                        },
                    },
                },
                required: ['result'],
            },
        },
    },
    preValidation: authorize,
}

export default function (fastify: FastifyInstance) {
    fastify.get('/color', getOpts, async (request: FastifyRequest) => {
        const query = request.query as IColor

        const colors = await listMany(query)
        return { result: colors }
    })
}
