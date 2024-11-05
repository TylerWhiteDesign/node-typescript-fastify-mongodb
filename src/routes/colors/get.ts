import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import authorize from '../../middleware/authorize.js'
import listMany from '../../controllers/api/colors/listMany.js'
import { IColor } from '../../models/index.js'

const opts: RouteShorthandOptions = {
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

export default function get(fastify: FastifyInstance) {
    fastify.get<{
        Querystring: IColor
        Reply: { result: IColor[] }
    }>('/color', opts, async (request) => {
        const query = request.query

        const colors = await listMany(query)

        return { result: colors }
    })
}
