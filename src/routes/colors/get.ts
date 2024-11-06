import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import authorize from '../../middleware/authorize.js'
import listMany from '../../controllers/api/colors/listMany.js'
import { IColor } from '../../models/index.js'

const opts: RouteShorthandOptions = {
    schema: {
        querystring: { $ref: 'Color' },
        response: {
            200: {
                type: 'array',
                items: { $ref: 'Color' },
            },
        },
    },
    preValidation: authorize,
}

export default function get(fastify: FastifyInstance) {
    fastify.get<{
        Querystring: IColor
        Reply: IColor[]
    }>('/colors', opts, async (request) => {
        const query = request.query

        const colors = await listMany(query)

        return colors
    })
}
